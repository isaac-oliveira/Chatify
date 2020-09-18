import React, { useRef } from 'react';

import Button, { ButtonRef } from '../../components/Button';
import Input, { InputRef } from '../../components/Input';
import Logo from '../../components/Logo';
import useAuth from '../../hooks/useAuth';

import { ButtonContainer, Container, InputContainer } from './styles';

const Login = () => {
	const { login } = useAuth();
	const emailRef = useRef<InputRef>(null);
	const passwordRef = useRef<InputRef>(null);
	const loginRef = useRef<ButtonRef>(null);

	async function handleLogin() {
		if (!loginRef.current?.loading) {
			loginRef.current?.showLoading();
			const email = emailRef.current?.value;
			const password = passwordRef.current?.value;

			if (email && password) {
				await login({ email, password });
			}

			loginRef.current?.hideLoading();
		}
	}

	return (
		<Container behavior="height">
			<Logo />
			<InputContainer>
				<Input
					ref={emailRef}
					placeholder="E-mail"
					defaultValue="isaac@gmail.com"
				/>
				<Input
					ref={passwordRef}
					placeholder="Senha"
					defaultValue="12345"
					secureTextEntry
				/>
			</InputContainer>
			<ButtonContainer>
				<Button ref={loginRef} title="Entrar" onPress={handleLogin} />
			</ButtonContainer>
		</Container>
	);
};

export default Login;
