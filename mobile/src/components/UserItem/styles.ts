import styled from 'styled-components/native';

export const ItemContainer = styled.TouchableOpacity`
	flex-direction: row;
	margin: 10px;
	padding: 10px;
	background-color: ${({ theme }) => theme.colors.secundary};
	border-radius: 10px;
`;

export const Avatar = styled.Image`
	border-radius: 100px;
`;

export const CenterView = styled.View`
	flex: 1;
	align-self: center;
	padding: 10px;
`;

export const Title = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.textPrimary};
`;
