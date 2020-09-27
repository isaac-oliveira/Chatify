import React, { useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';

import { AuthContext, UserLogin, UserRegister } from '../hooks/useAuth';
import api from '../services/api';

interface AuthProviderProps {
	children: JSX.Element;
}

interface ResponseSuccess {
	id: number;
	token: string;
}

interface ResponseError {
	error: string;
}

interface ObjectKeyString {
	[key: string]: any;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [logged, setLogged] = useState<boolean | null>(null);
	const [userId, setUserId] = useState<number | null>(null);

	const listOfSetItem = useMemo<ObjectKeyString>(
		() => ({
			['@chatify/token']: (value: string) => setLogged(!!value),
			['@chatify/userId']: (value: string) => setUserId(Number(value)),
		}),
		[],
	);

	useEffect(() => {
		AsyncStorage.multiGet(['@chatify/token', '@chatify/userId']).then(
			(result) => {
				for (const item of result) {
					const [key, value] = item;
					const setItem = listOfSetItem[key];

					setItem(value);
				}
			},
		);
	}, [listOfSetItem]);

	async function login(user: UserLogin) {
		const { ok, ...response } = await api.post('/login', user);
		if (ok) {
			const data = response.data as ResponseSuccess;
			const firstItem = ['@chatify/token', data.token];
			const secondItem = ['@chatify/userId', JSON.stringify(data.id)];
			await AsyncStorage.multiSet([firstItem, secondItem]);

			const deviceToken = await messaging().getToken();
			await api.post('/device', { token: deviceToken });

			setLogged(true);
		} else {
			const data = response.data as ResponseError;
			Alert.alert('Ops!', data?.error || 'Servidor não está respondendo');
		}
	}

	async function register(user: UserRegister) {
		const { ok, ...response } = await api.post('/register', user);

		if (ok) {
			const data = response.data as ResponseSuccess;
			const firstItem = ['@chatify/token', data.token];
			const secondItem = ['@chatify/userId', JSON.stringify(data.id)];
			await AsyncStorage.multiSet([firstItem, secondItem]);

			setLogged(true);
		} else {
			const data = response.data as ResponseError;

			Alert.alert('Ops!', data?.error || 'Servidor não está respondendo');
		}
	}

	async function logout() {
		await AsyncStorage.clear();
		setLogged(false);
	}

	return (
		<AuthContext.Provider value={{ logged, userId, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
