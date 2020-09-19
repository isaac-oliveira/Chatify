import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'styled-components';

import { Container } from './styles';

interface IconButtonProps {
	name: string;
	color?: string;
	onPress(): void;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
	const { colors } = useTheme();

	const { name, color = colors.secundary, onPress } = props;

	return (
		<Container onPress={onPress}>
			<Icon name={name} color={color} size={24} />
		</Container>
	);
};

export default IconButton;
