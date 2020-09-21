import React from 'react';

import {
	Avatar,
	CenterView,
	ItemContainer,
	NewMessage,
	RightView,
	Subtitle,
	Time,
	Title,
} from './styles';

import avatar from '../../assets/images/user_small.png';

export interface Chat {
	id: number;
	name: string;
	message: string;
	viewed: boolean;
	time: string;
}

interface ChatItemProps {
	chat: Chat;
	onPress(): void;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat, onPress }) => {
	return (
		<ItemContainer onPress={onPress}>
			<Avatar source={avatar} />
			<CenterView>
				<Title>{chat.name}</Title>
				<Subtitle>{chat.message}</Subtitle>
			</CenterView>
			<RightView>
				<Time>{chat.time}</Time>
				{!chat.viewed && <NewMessage>Nova</NewMessage>}
			</RightView>
		</ItemContainer>
	);
};

export default ChatItem;
