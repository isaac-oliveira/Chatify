import React from 'react';

import { Avatar, CenterView, ItemContainer, Title } from './styles';

import avatar from '../../assets/images/user_small.png';

export interface User {
	id: number;
	name: string;
}

interface UserItemProps {
	user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
	return (
		<ItemContainer>
			<Avatar source={avatar} />
			<CenterView>
				<Title>{user.name}</Title>
			</CenterView>
		</ItemContainer>
	);
};

export default UserItem;
