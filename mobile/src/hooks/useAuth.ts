import { createContext, useContext } from 'react';

export interface UserLogin {
	email: string;
	password: string;
}

export interface UserRegister extends UserLogin {
	name: string;
}

interface IAuth {
	logged: boolean | null;
	login(user: UserLogin): Promise<void>;
	register(user: UserRegister): Promise<void>;
	logout(): void;
}

export const AuthContext = createContext<IAuth>({} as IAuth);

export default function useAuth() {
	const value = useContext(AuthContext);

	return value;
}
