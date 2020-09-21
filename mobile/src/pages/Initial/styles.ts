import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const buttonWidth = width * 0.75;

export const Container = styled.View`
	flex: 1;
	background-color: ${(props) => props.theme.colors.primary};
	justify-content: center;
	align-items: center;
`;

export const ButtonContainer = styled.View`
	width: ${buttonWidth}px;
	margin-top: 30px;
`;
