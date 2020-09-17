import React, { useEffect, useState } from 'react';
import { AuthContext } from '../hooks/useAuth';

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [logged, setLogged] = useState<boolean | null>(null);

	useEffect(() => {
		setTimeout(() => {
			setLogged(true);
		}, 2000);
	}, []);

	async function login() {
		await new Promise(() => {});
	}

	async function register() {
		await new Promise(() => {});
	}

	function logout() {}

	return (
		<AuthContext.Provider value={{ logged, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
