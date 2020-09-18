import React from 'react';
import {
	DrawerContentComponentProps,
	DrawerItemList,
} from '@react-navigation/drawer';

import { Container, Content, Image, Logout, LogoutText } from './styles';

import avatar from '../../assets/images/user_big.png';

interface DrawerContentProps extends DrawerContentComponentProps {
	logout(): void;
}

const DrawerContent: React.FC<DrawerContentProps> = (props) => {
	function handleLogout() {
		props.logout();
	}

	return (
		<Container>
			<Image source={avatar} resizeMode="cover" />
			<Content>
				<DrawerItemList {...props} itemStyle={itemStyle} />
			</Content>
			<Logout onPress={handleLogout}>
				<LogoutText>Sair</LogoutText>
			</Logout>
		</Container>
	);
};

const itemStyle = { borderRadius: 0, marginHorizontal: 0 };

export default DrawerContent;
