import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ListRenderItem, ListRenderItemInfo } from 'react-native';

import HeaderSearch from '../../components/HeaderSearch';
import List from '../../components/List';
import UserItem, { User } from '../../components/UserItem';
import api from '../../services/api';

import { Container } from './styles';

type ItemRender = ListRenderItem<User>;
type ItemInfo = ListRenderItemInfo<User>;

const Users = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [users, setUsers] = useState<User[]>([]);
	const { navigate } = useNavigation();

	useEffect(() => {
		api.get('/users').then((response) => {
			const data = response?.data as User[];
			setUsers(data);
			setLoading(false);
		});
	}, []);

	const renderItem: ItemRender = (props: ItemInfo) => {
		function handleItem() {
			navigate('Messages', {
				userId: props.item.id,
				name: props.item.name,
			});
		}
		return <UserItem user={props.item} onPress={handleItem} />;
	};

	return (
		<Container>
			<HeaderSearch title="Usuários" onChangeSearch={() => {}} />
			<List<User>
				loading={loading}
				data={users}
				keyExtractor={(item) => String(item.id)}
				renderItem={renderItem}
			/>
		</Container>
	);
};

export default Users;
