import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

const imageSize = width * 0.45;
const buttonWidth = width * 0.75;
const buttonHeight = height * 0.06;

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.colors.primary};
`;

export const Avatar = styled.Image`
	width: ${imageSize}px;
	height: ${imageSize}px;
	align-self: center;
	border-radius: ${imageSize / 2}px;
	border-width: 10px;
	border-color: ${({ theme }) => theme.colors.secundary};
	margin-vertical: 15px;
`;

export const Card = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.secundary};
	margin: 20px;
	padding: 10px;
	border-radius: 10px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.textSecundary};
	text-align: center;
`;

export const Content = styled.View`
	flex: 1;
`;

export const ButtonContainer = styled.View`
	width: ${buttonWidth}px;
	height: ${buttonHeight}px;
	margin-vertical: 10px;
	align-self: center;
`;

export const Footer = styled.View`
	background-color: ${({ theme }) => theme.colors.secundary};
	margin: 20px;
	padding: 10px;
	border-radius: 10px;
`;
