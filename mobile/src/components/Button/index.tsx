import React from 'react';
import { useTheme } from 'styled-components';
import { Container, Title } from './styles';

interface ButtonProps {
	border?: boolean;
	color?: string;
	title: string;
	titleColor?: string;
	onPress?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
	const { colors } = useTheme();

	const {
		title,
		border,
		color = colors.secundary,
		titleColor = colors.primary,
		onPress = () => {},
	} = props;

	return (
		<Container border={border} color={color} onPress={onPress}>
			<Title color={border ? color : titleColor}>{title}</Title>
		</Container>
	);
};

export default Button;
