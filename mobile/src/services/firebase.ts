import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

import firebaseConfig from '../config/firebase.json';

firebase.initializeApp(firebaseConfig);

async function requestUserPermission() {
	const authStatus = await messaging().requestPermission();
	const enabled =
		authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
		authStatus === messaging.AuthorizationStatus.PROVISIONAL;

	if (enabled) {
		console.log('Authorization status:', authStatus);
		messaging().setBackgroundMessageHandler(async (remoteMessage) => {
			console.log('Message handled in the background!', remoteMessage);
		});
	}
}

requestUserPermission();
