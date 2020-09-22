import React, { useEffect, useRef, useState } from 'react';
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
import Input, { InputRef } from '../../components/Input';

type DrawerProps = DrawerNavigationProp<{}>;

const Profile = () => {
	const { colors } = useTheme();
	const { openDrawer } = useNavigation<DrawerProps>();
	const [editing, setEditing] = useState<boolean>(false);
	const nameRef = useRef<InputRef>(null);

	useEffect(() => {
		if (editing) {
			nameRef.current?.focus();
		}
	}, [editing]);

	function handleButtonLeft() {
		openDrawer();
	}

	function handleEditAndSave() {
		setEditing(!editing);
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
						ref={nameRef}
						color={editing ? colors.inputDark : colors.textSecundary}
						defaultValue="Isaac Oliveira"
						editable={editing}
					/>
					<Input
						color={editing ? colors.inputDark : colors.textSecundary}
						defaultValue="isaac@gmail.com"
						editable={editing}
					/>
				</Content>
				<ButtonContainer>
					<Button
						title={editing ? 'Salvar' : 'Editar'}
						titleColor={colors.secundary}
						color={colors.primary}
						onPress={handleEditAndSave}
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
