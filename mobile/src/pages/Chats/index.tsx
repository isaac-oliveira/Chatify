import React from 'react';
import { Text } from 'react-native';
import HeaderSearch from '../../components/HeaderSearch';
import List from '../../components/List';

import { Container } from './styles';

interface Chat {
	id: number;
	name: string;
	message: string;
	viewed: boolean;
	time: string;
}

const data = [
	{ id: 1, name: 'Isaac', message: 'Iaê', viewed: false, time: '00:00' },
	{ id: 2, name: 'Iasmim', message: 'Iaê', viewed: true, time: '00:00' },
] as Chat[];

const Chats = () => {
	return (
		<Container>
			<HeaderSearch title="Chats" onChangeSearch={() => {}} />
			<List<Chat>
				data={data}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => {
					return <Text>{item.name}</Text>;
				}}
			/>
		</Container>
	);
};

export default Chats;
