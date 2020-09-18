import React, { useRef } from 'react';

import Button, { ButtonRef } from '../../components/Button';
import Input, { InputRef } from '../../components/Input';
import Logo from '../../components/Logo';
import useAuth from '../../hooks/useAuth';

import { ButtonContainer, Container, InputContainer } from './styles';

const Register = () => {
	const { register } = useAuth();

	const nameRef = useRef<InputRef>(null);
	const emailRef = useRef<InputRef>(null);
	const passwordRef = useRef<InputRef>(null);
	const registerRef = useRef<ButtonRef>(null);

	async function handleRegister() {
		if (!registerRef.current?.loading) {
			registerRef.current?.showLoading();
			const name = nameRef.current?.value;
			const email = emailRef.current?.value;
			const password = passwordRef.current?.value;

			if (name && email && password) {
				await register({ name, email, password });
			}

			registerRef.current?.hideLoading();
		}
	}

	return (
		<Container behavior="height">
			<Logo />
			<InputContainer>
				<Input ref={nameRef} placeholder="Nome" />
				<Input ref={emailRef} placeholder="E-mail" />
				<Input ref={passwordRef} placeholder="Senha" />
			</InputContainer>
			<ButtonContainer>
				<Button ref={registerRef} title="Cadastrar" onPress={handleRegister} />
			</ButtonContainer>
		</Container>
	);
};

export default Register;
