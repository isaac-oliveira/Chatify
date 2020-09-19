import styled from 'styled-components/native';

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Title = styled.Text`
	flex: 1;
	color: ${({ theme }) => theme.colors.secundary};
	font-size: 18px;
`;
