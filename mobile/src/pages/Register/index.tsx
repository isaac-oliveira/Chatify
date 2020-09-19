import React, { useRef } from 'react';
import { Alert } from 'react-native';

import Button, { ButtonRef } from '../../components/Button';
import Input, { InputRef } from '../../components/Input';
import Logo from '../../components/Logo';
import useAuth from '../../hooks/useAuth';
import verifyInputsAreEmpty from '../../utils/verifyInputsAreEmpty';

import { ButtonContainer, Container, InputContainer } from './styles';

const Register = () => {
	const { register } = useAuth();

	const nameRef = useRef<InputRef>(null);
	const emailRef = useRef<InputRef>(null);
	const passwordRef = useRef<InputRef>(null);
	const registerRef = useRef<ButtonRef>(null);

	async function handleRegister() {
		if (!registerRef.current?.loading) {
			const name = nameRef.current?.value || '';
			const email = emailRef.current?.value || '';
			const password = passwordRef.current?.value || '';

			const message = verifyInputsAreEmpty([
				{ value: name, name: 'nome' },
				{ value: email, name: 'e-mail' },
				{ value: password, name: 'senha' },
			]);

			if (message) {
				Alert.alert('Ops!', message);
				return;
			}

			registerRef.current?.showLoading();
			await register({ name, email, password });
			registerRef.current?.hideLoading();
		}
	}

	function nameSubmit() {
		emailRef.current?.focus();
	}

	function emailSubmit() {
		passwordRef.current?.focus();
	}

	function passwordSubmit() {
		handleRegister();
	}

	return (
		<Container behavior="height">
			<Logo />
			<InputContainer>
				<Input
					ref={nameRef}
					placeholder="Nome"
					returnKeyType="next"
					onSubmitEditing={nameSubmit}
				/>
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
				<Button ref={registerRef} title="Cadastrar" onPress={handleRegister} />
			</ButtonContainer>
		</Container>
	);
};

export default Register;
