import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const MessageEmpty = styled.Text`
	flex: 1;
	text-align: center;
	text-align-vertical: center;
	color: ${(props) => props.theme.colors.secundary};
`;

export const Loading = styled(ActivityIndicator).attrs(({ theme }) => ({
	color: theme.colors.secundary,
}))`
	flex: 1;
	text-align: center;
	text-align-vertical: center;
`;
