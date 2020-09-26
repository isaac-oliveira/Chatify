import React, { useCallback, useEffect, useState } from 'react';
import { insertChat } from '../database/chat';
import { insertMessage } from '../database/messages';
import useAuth from '../hooks/useAuth';

import { MessageContext, Listen } from '../hooks/useMessage';
import useSocket from '../hooks/useSocket';

interface MessageProviderProps {
	children: JSX.Element;
}

const MessageProvider: React.FC<MessageProviderProps> = ({ children }) => {
	const [listener, setListener] = useState<Listen | null>(null);
	const { userId } = useAuth();
	const socket = useSocket();

	useEffect(() => {
		socket?.on('receivedMessage', (data: any) => {
			if (userId) {
				setListener((listen: Listen) => {
					const message = {
						id: Math.random() * 100000,
						text: data?.message,
						sendUserId: data?.userId,
						receivedUserId: userId,
					};

					console.log(message);

					insertMessage(message);
					insertChat({
						id: data?.userId,
						message: data?.message,
						name: data?.name,
						time: '00:00',
						viewed: false,
					});

					if (listen) {
						listen(message);
					}
					return listen;
				});
			}
		});
	}, [socket, userId]);

	const subscribe = useCallback((listen: Listen) => {
		setListener(() => listen);
		console.log('subscribe');
	}, []);

	function sendMessage(data: any) {
		if (userId) {
			socket?.send(data);

			const message = {
				id: Math.random() * 100000,
				text: data?.message,
				sendUserId: userId,
				receivedUserId: data?.userId,
			};

			insertMessage(message);
			insertChat({
				id: data?.userId,
				message: data?.message,
				name: data?.name,
				time: '00:00',
				viewed: true,
			});

			if (listener) {
				listener(message);
			}
		}
	}

	return (
		<MessageContext.Provider value={{ subscribe, sendMessage }}>
			{children}
		</MessageContext.Provider>
	);
};

export default MessageProvider;
