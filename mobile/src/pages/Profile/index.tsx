import React from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import { Container } from './styles';

type DrawerProps = DrawerNavigationProp<{}>;

const Profile = () => {
	const { openDrawer } = useNavigation<DrawerProps>();

	function handleButtonLeft() {
		openDrawer();
	}

	return (
		<Container>
			<Header
				title="Perfil"
				iconLeft="menu"
				iconRight="add-a-photo"
				onPressLeft={handleButtonLeft}
				onPressRight={() => {}}
			/>
		</Container>
	);
};

export default Profile;
