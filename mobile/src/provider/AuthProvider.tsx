import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { AuthContext, UserLogin, UserRegister } from '../hooks/useAuth';
import api from '../services/api';

interface AuthProviderProps {
	children: React.ReactNode;
}

interface ResponseSuccess {
	id: number;
	token: string;
}

interface ResponseError {
	error: string;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [logged, setLogged] = useState<boolean | null>(null);

	useEffect(() => {
		AsyncStorage.getItem('@chatify/token').then((token) => {
			setLogged(!!token);
		});
	}, []);

	async function login(user: UserLogin) {
		const { ok, ...response } = await api.post('/login', user);

		if (ok) {
			const data = response.data as ResponseSuccess;
			await AsyncStorage.setItem('@chatify/token', data.token);
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
			await AsyncStorage.setItem('@chatify/token', data.token);
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
		<AuthContext.Provider value={{ logged, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
