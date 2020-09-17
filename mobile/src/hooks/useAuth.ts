import { createContext, useContext } from 'react';

interface IAuth {
	logged: boolean | null;
	login(): Promise<void>;
	register(): Promise<void>;
	logout(): void;
}

export const AuthContext = createContext<IAuth>({} as IAuth);

export default function useAuth() {
	const value = useContext(AuthContext);

	return value;
}
