import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'apisauce';

const api = create({
	baseURL: 'https://api-chatify.herokuapp.com',
	timeout: 7000,
});

api.addAsyncRequestTransform(async (request) => {
	const token = await AsyncStorage.getItem('@chatify/token');
	if (token) {
		request.headers.Authorization = `Bearer ${token}`;
	}
});

export default api;
