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

export const Subtitle = styled.Text`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.textSecundary};
`;

export const RightView = styled.View`
	justify-content: space-between;
	align-items: flex-end;
	margin-right: 5px;
`;

export const Time = styled.Text`
	padding: 5px;
`;

export const NewMessage = styled.Text`
	color: ${({ theme }) => theme.colors.secundary};
	background-color: ${({ theme }) => theme.colors.new};
	padding-vertical: 5px;
	padding-horizontal: 15px;
	border-radius: 50px;
`;
