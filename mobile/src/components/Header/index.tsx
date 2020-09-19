import React from 'react';

import IconButton from '../IconButton';

import { Container, Title } from './styles';

interface HeaderProps {
	title: string;
	iconLeft: string;
	iconRight: string;
	onPressLeft(): void;
	onPressRight(): void;
	ContentCenter?(): JSX.Element;
	ContentCenterShown?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
	const {
		title,
		iconLeft,
		iconRight,
		onPressLeft,
		onPressRight,
		ContentCenter,
		ContentCenterShown,
	} = props;

	function handleButtonLeft() {
		if (onPressLeft) {
			onPressLeft();
		}
	}

	function handleButtonRight() {
		if (onPressRight) {
			onPressRight();
		}
	}

	return (
		<Container>
			<IconButton name={iconLeft} onPress={handleButtonLeft} />
			{!ContentCenterShown && <Title>{title}</Title>}
			{ContentCenterShown && ContentCenter && ContentCenter()}
			<IconButton name={iconRight} onPress={handleButtonRight} />
		</Container>
	);
};

export default Header;
