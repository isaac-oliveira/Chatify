import React, { useRef, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import List from '../../components/List';
import IconButton from '../../components/IconButton';
import MessageItem, { Message } from '../../components/MessageItem';
import { InputRef } from '../../components/Input';

import {
	Avatar,
	Container,
	Content,
	Header,
	Input,
	MessageContainer,
	Title,
} from './styles';

import avatar from '../../assets/images/user_small.png';

type ParamList = {
	Detail: {
		userId: number;
	};
};

const messagesDef = [
	{ id: 1, text: 'Oi', userId: 1 },
	{ id: 2, text: 'Oi', userId: 3 },
	{ id: 3, text: 'Tudo bom?', userId: 1 },
	{ id: 4, text: 'Erick lindo', userId: 3 },
].reverse() as Message[];

const Messages = () => {
	const { colors } = useTheme();
	const { params } = useRoute<RouteProp<ParamList, 'Detail'>>();
	const inputRef = useRef<InputRef>(null);
	const [messages, setMessages] = useState<Message[]>(messagesDef);
	const { goBack } = useNavigation();

	console.log(params.userId);

	function handleBack() {
		goBack();
	}

	function handleSend() {
		const message = inputRef.current?.value;
		if (message) {
			setMessages((state) => {
				const newMessage = {
					id: Math.random() + 10,
					text: message,
					userId: 3,
				};
				return [newMessage, ...state];
			});
		}
	}

	return (
		<Container>
			<Header>
				<IconButton
					name="keyboard-arrow-left"
					color={colors.textPrimary}
					onPress={handleBack}
				/>
				<Avatar source={avatar} />
				<Title>Isaac</Title>
			</Header>
			<Content />
			<List<Message>
				data={messages}
				inverted
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => {
					return <MessageItem message={item} />;
				}}
			/>
			<MessageContainer>
				<Input
					ref={inputRef}
					placeholder="Digite aqui"
					placeholderTextColor={colors.textSecundary}
				/>
				<IconButton name="send" color={colors.primary} onPress={handleSend} />
			</MessageContainer>
		</Container>
	);
};

export default Messages;
