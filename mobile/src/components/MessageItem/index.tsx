import React from 'react';

import useAuth from '../../hooks/useAuth';

import {
	MessageReceiveContainer,
	MessageReceiveText,
	MessageSendContainer,
	MessageSendText,
} from './styles';

export interface Message {
	id: number;
	text: string;
	sendUserId: number;
	receivedUserId: number;
}

interface MessageItemProps {
	message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
	const { userId } = useAuth();

	if (message.sendUserId === userId) {
		return (
			<MessageSendContainer>
				<MessageSendText>{message.text}</MessageSendText>
			</MessageSendContainer>
		);
	}

	return (
		<MessageReceiveContainer>
			<MessageReceiveText>{message.text}</MessageReceiveText>
		</MessageReceiveContainer>
	);
};

export default MessageItem;
