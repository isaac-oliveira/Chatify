import React from 'react';

import Button from '../../components/Button';
import Logo from '../../components/Logo';

import { Container, ButtonContainer } from './styles';

const Initial = () => {
	return (
		<Container>
			<Logo />
			<ButtonContainer>
				<Button title="Entrar" />
				<Button title="Cadastar" border={true} />
			</ButtonContainer>
		</Container>
	);
};

export default Initial;
