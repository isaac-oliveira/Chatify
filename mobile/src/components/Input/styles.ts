import styled from 'styled-components/native';

export const TextInput = styled.TextInput`
	border-color: ${({ theme }) => theme.colors.secundary};
	border-bottom-width: 2px;
	color: ${({ theme }) => theme.colors.secundary};
	margin: 10px;
	font-size: 18px;
`;
