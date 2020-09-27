import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ListRenderItem, ListRenderItemInfo } from 'react-native';

import ChatItem, { Chat } from '../../components/ChatItem';
import HeaderSearch from '../../components/HeaderSearch';
import List from '../../components/List';

import { Container } from './styles';
import { getChats, insertChat } from '../../database/chat';
import useMessage from '../../hooks/useMessage';

type ItemRender = ListRenderItem<Chat>;
type ItemInfo = ListRenderItemInfo<Chat>;

const Chats = () => {
	const { addListener, navigate } = useNavigation();
	const [chats, setChats] = useState(getChats());

	const { subscribe } = useMessage();

	useEffect(() => {
		const unsubscribe = addListener('focus', () => {
			setChats(getChats());
			subscribe(() => {
				setChats(getChats());
			});
		});
		return unsubscribe;
	}, [subscribe, addListener]);

	const renderItem: ItemRender = (props: ItemInfo) => {
		function handleItem() {
			if (!props.item.viewed) {
				console.log(props.item);
				insertChat({
					id: props.item.id,
					viewed: true,
				});
			}

			navigate('Messages', {
				userId: props.item.id,
				name: props.item.name,
			});
		}

		return <ChatItem chat={props.item} onPress={handleItem} />;
	};

	return (
		<Container>
			<HeaderSearch title="Chats" onChangeSearch={() => {}} />
			<List<Chat>
				data={chats}
				keyExtractor={(item) => String(item.id)}
				renderItem={renderItem}
			/>
		</Container>
	);
};

export default Chats;
