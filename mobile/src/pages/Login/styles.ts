import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const inputWidth = width * 0.8;
const buttonWidth = width * 0.75;

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	background-color: ${(props) => props.theme.colors.primary};
	justify-content: center;
	align-items: center;
`;

export const InputContainer = styled.View`
	width: ${inputWidth}px;
	margin-vertical: 10px;
`;

export const ButtonContainer = styled.View`
	width: ${buttonWidth}px;
	margin-vertical: 10px;
`;
