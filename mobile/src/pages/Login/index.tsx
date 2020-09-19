import React, { useRef } from 'react';
import { Alert } from 'react-native';

import Button, { ButtonRef } from '../../components/Button';
import Input, { InputRef } from '../../components/Input';
import Logo from '../../components/Logo';
import useAuth from '../../hooks/useAuth';
import verifyInputsAreEmpty from '../../utils/verifyInputsAreEmpty';

import { ButtonContainer, Container, InputContainer } from './styles';

const Login = () => {
	const { login } = useAuth();
	const emailRef = useRef<InputRef>(null);
	const passwordRef = useRef<InputRef>(null);
	const loginRef = useRef<ButtonRef>(null);

	async function handleLogin() {
		if (!loginRef.current?.loading) {
			const email = emailRef.current?.value || '';
			const password = passwordRef.current?.value || '';

			const message = verifyInputsAreEmpty([
				{ value: email, name: 'e-mail' },
				{ value: password, name: 'senha' },
			]);

			if (message) {
				Alert.alert('Ops!', message);
				return;
			}

			loginRef.current?.showLoading();
			await login({ email, password });
			loginRef.current?.hideLoading();
		}
	}

	function emailSubmit() {
		passwordRef.current?.focus();
	}

	function passwordSubmit() {
		handleLogin();
	}

	return (
		<Container behavior="height">
			<Logo />
			<InputContainer>
				<Input
					ref={emailRef}
					placeholder="E-mail"
					keyboardType="email-address"
					returnKeyType="next"
					onSubmitEditing={emailSubmit}
				/>
				<Input
					ref={passwordRef}
					placeholder="Senha"
					secureTextEntry
					returnKeyType="done"
					onSubmitEditing={passwordSubmit}
				/>
			</InputContainer>
			<ButtonContainer>
				<Button ref={loginRef} title="Entrar" onPress={handleLogin} />
			</ButtonContainer>
		</Container>
	);
};

export default Login;
