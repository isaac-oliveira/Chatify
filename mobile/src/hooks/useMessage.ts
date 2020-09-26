import { createContext, useContext } from 'react';

export type Listen = (data: any) => void;

interface Message {
	subscribe(listen: Listen): void;
	sendMessage(data: any): void;
}

export const MessageContext = createContext({} as Message);

export default function useMessage() {
	const value = useContext(MessageContext);

	return value;
}
