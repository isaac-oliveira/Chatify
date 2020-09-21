import styled from 'styled-components/native';

interface TextInputProps {
	color?: string;
}

export const TextInput = styled.TextInput<TextInputProps>`
	border-color: ${({ theme, color }) =>
		color ? color : theme.colors.inputLight};
	border-bottom-width: 2px;
	color: ${({ theme, color }) => (color ? color : theme.colors.inputLight)};
	margin: 10px;
	font-size: 18px;
`;
