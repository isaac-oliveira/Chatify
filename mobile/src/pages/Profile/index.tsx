import React from 'react';
import { useTheme } from 'styled-components';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import Button from '../../components/Button';

import {
	Avatar,
	ButtonContainer,
	Card,
	Container,
	Content,
	Footer,
	Title,
} from './styles';

import avatar from '../../assets/images/user_big.png';
import Input from '../../components/Input';

type DrawerProps = DrawerNavigationProp<{}>;

const Profile = () => {
	const { colors } = useTheme();
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

			<Avatar source={avatar} />
			<Card>
				<Title>Informações pessoais</Title>
				<Content>
					<Input
						color={colors.inputDark}
						defaultValue="isaac@gmail.com"
						editable={false}
					/>
					<Input
						color={colors.inputDark}
						defaultValue="12345"
						editable={false}
					/>
				</Content>
				<ButtonContainer>
					<Button
						title="Editar"
						titleColor={colors.secundary}
						color={colors.primary}
						onPress={() => {}}
					/>
				</ButtonContainer>
			</Card>
			<Footer>
				<Title>Conta</Title>
				<ButtonContainer>
					<Button
						title="Apagar Conta"
						titleColor={colors.secundary}
						color={colors.delete}
						onPress={() => {}}
					/>
				</ButtonContainer>
			</Footer>
		</Container>
	);
};

export default Profile;
