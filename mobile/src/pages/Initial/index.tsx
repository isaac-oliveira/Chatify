import { useNavigation } from '@react-navigation/native';
import React from 'react';

import Button from '../../components/Button';
import Logo from '../../components/Logo';

import { Container, ButtonContainer } from './styles';

const Initial = () => {
	const { navigate } = useNavigation();

	function handleNavigateLogin() {
		navigate('Login');
	}

	function handleNavigateRegister() {
		navigate('Register');
	}

	return (
		<Container>
			<Logo />
			<ButtonContainer>
				<Button title="Entrar" onPress={handleNavigateLogin} />
				<Button
					title="Cadastar"
					border={true}
					onPress={handleNavigateRegister}
				/>
			</ButtonContainer>
		</Container>
	);
};

export default Initial;
