import io from 'socket.io-client';
import AsyncStorage from '@react-native-community/async-storage';

const connectSocket = async () => {
	const token = await AsyncStorage.getItem('@chatify/token');

	const socket = io('https://api-chatify.herokuapp.com', {
		transports: ['polling'],
		query: {
			token,
		},
	});

	return socket;
};

export default connectSocket;
