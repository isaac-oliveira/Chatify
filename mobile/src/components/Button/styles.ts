import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, fontScale } = Dimensions.get('window');

interface ContainerProps {
	border?: boolean;
	color?: string;
}

interface TitleProps {
	color?: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: 10px;
	padding: 25px;
	background-color: ${({ color, border }) => (!border ? color : 'transparent')};
	border-color: ${({ color }) => color};
	border-width: ${({ border }) => (border ? 2 : 0)}px;
	border-radius: ${width / 2}px;
`;

export const Title = styled.Text<TitleProps>`
	color: ${({ color }) => color};
	font-size: ${18 * fontScale}px;
`;
