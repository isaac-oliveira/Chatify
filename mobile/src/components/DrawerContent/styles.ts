import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	overflow: hidden;
`;

export const Image = styled.Image`
	flex: 0.4;
	align-self: center;
	margin-bottom: 10px;
`;

export const Content = styled.View`
	flex: 0.6;
`;

export const Logout = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	padding-vertical: 15px;
`;

export const LogoutText = styled.Text`
	font-size: 18px;
	color: ${({ theme }) => theme.colors.primary};
`;
