import React from 'react';
import { ListRenderItem, ListRenderItemInfo } from 'react-native';

import HeaderSearch from '../../components/HeaderSearch';
import List from '../../components/List';
import UserItem, { User } from '../../components/UserItem';

import { Container } from './styles';

const data = [
	{ id: 1, name: 'Isaac' },
	{ id: 2, name: 'Iasmim' },
] as User[];

type ItemRender = ListRenderItem<User>;
type ItemInfo = ListRenderItemInfo<User>;

const Users = () => {
	const renderItem: ItemRender = (props: ItemInfo) => {
		return <UserItem user={props.item} />;
	};

	return (
		<Container>
			<HeaderSearch title="Usuários" onChangeSearch={() => {}} />
			<List<User>
				data={data}
				keyExtractor={(item) => String(item.id)}
				renderItem={renderItem}
			/>
		</Container>
	);
};

export default Users;
