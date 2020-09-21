import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ListRenderItem, ListRenderItemInfo, Text } from 'react-native';

import ChatItem, { Chat } from '../../components/ChatItem';
import HeaderSearch from '../../components/HeaderSearch';
import List from '../../components/List';

import { Container } from './styles';

const data = [
	{ id: 1, name: 'Isaac', message: 'Iaê', viewed: false, time: '00:00' },
	{ id: 2, name: 'Iasmim', message: 'Iaê', viewed: true, time: '00:00' },
] as Chat[];

type ItemRender = ListRenderItem<Chat>;
type ItemInfo = ListRenderItemInfo<Chat>;

const Chats = () => {
	const { navigate } = useNavigation();

	const renderItem: ItemRender = (props: ItemInfo) => {
		function handleItem() {
			navigate('Messages', {
				userId: props.item.id,
			});
		}

		return <ChatItem chat={props.item} onPress={handleItem} />;
	};

	return (
		<Container>
			<HeaderSearch title="Chats" onChangeSearch={() => {}} />
			<List<Chat>
				data={data}
				keyExtractor={(item) => String(item.id)}
				renderItem={renderItem}
			/>
		</Container>
	);
};

export default Chats;
