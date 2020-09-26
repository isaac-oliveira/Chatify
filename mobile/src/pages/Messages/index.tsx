import React, { useEffect, useRef, useState } from 'react';
import {
	RouteProp,
	useFocusEffect,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
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
import { getMessages } from '../../database/messages';
import useMessage from '../../hooks/useMessage';

type ParamList = {
	Detail: {
		userId: number;
		name: string;
	};
};

const Messages = () => {
	const { colors } = useTheme();
	const { params } = useRoute<RouteProp<ParamList, 'Detail'>>();
	const inputRef = useRef<InputRef>(null);
	const { goBack } = useNavigation();
	const initalMessage = getMessages(params.userId);
	const [messages, setMessages] = useState(initalMessage);
	const { subscribe, sendMessage } = useMessage();

	useEffect(() => {
		subscribe((data: any) => {
			setMessages((state) => [data, ...state]);
		});
	}, [subscribe]);

	function handleBack() {
		goBack();
	}

	function handleSend() {
		const message = inputRef.current?.value;
		if (message) {
			sendMessage({ userId: params.userId, name: params.name, message });
			inputRef.current?.clear();
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
				<Title>{params.name}</Title>
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
