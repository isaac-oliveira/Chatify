import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo';

import { ButtonContainer, Container, InputContainer } from './styles';

const Login = () => {
	return (
		<Container behavior="padding">
			<Logo />
			<InputContainer>
				<Input placeholder="E-mail" />
				<Input placeholder="Senha" />
			</InputContainer>
			<ButtonContainer>
				<Button title="Entrar" />
			</ButtonContainer>
		</Container>
	);
};

export default Login;
