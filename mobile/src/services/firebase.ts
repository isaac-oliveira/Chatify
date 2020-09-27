import AsyncStorage from '@react-native-community/async-storage';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

import firebaseConfig from '../config/firebase.json';
import { insertChat } from '../database/chat';
import { insertMessage } from '../database/messages';

firebase.initializeApp(firebaseConfig);

async function requestUserPermission() {
	const authStatus = await messaging().requestPermission();
	const enabled =
		authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
		authStatus === messaging.AuthorizationStatus.PROVISIONAL;

	if (enabled) {
		console.log('Authorization status:', authStatus);
		messaging().setBackgroundMessageHandler(async (remoteMessage) => {
			const { data } = remoteMessage;
			const userIdJson = await AsyncStorage.getItem('@chatify/userId');
			if (userIdJson) {
				const userId = JSON.parse(userIdJson);

				const message = {
					id: Math.random() * 100000,
					text: String(data?.message),
					sendUserId: Number(data?.userId),
					receivedUserId: userId,
				};

				console.log(message);

				insertMessage(message);
				insertChat({
					id: Number(data?.userId),
					message: String(data?.message),
					name: data?.name,
					time: '00:00',
					viewed: false,
				});
			}
		});
	}
}

requestUserPermission();
