import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import MyInput from '../../components/Input';

const { height } = Dimensions.get('screen');

const headerHeight = height * 0.07;
const imageSize = height * 0.055;
const imageRadius = imageSize / 2;

export const Container = styled.View`
	flex: 1;
	background-color: ${(props) => props.theme.colors.primary};
`;

export const Header = styled.View`
	align-items: center;
	flex-direction: row;
	height: ${headerHeight}px;
	background-color: ${({ theme }) => theme.colors.secundary};
`;

export const Avatar = styled.Image`
	width: ${imageSize}px;
	height: ${imageSize}px;
	border-radius: ${imageRadius}px;
`;

export const Title = styled.Text`
	margin-left: 15px;
	font-size: 18px;
`;

export const Content = styled.View`
	flex: 1;
`;

export const List = styled.FlatList`
	flex: 1;
`;

export const MessageContainer = styled.View`
	flex-direction: row;
	margin: 10px;
	padding-left: 10px;
	background-color: ${({ theme }) => theme.colors.secundary};
	border-radius: 5px;
`;

export const Input = styled(MyInput)`
	flex: 1;
	font-size: 16px;
	color: #000;
	border-bottom-width: 0px;
	color: ${({ theme }) => theme.colors.textPrimary};
	margin: 0;
`;
