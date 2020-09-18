import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useTheme } from 'styled-components';
import { Container, Loading, Title } from './styles';

interface ButtonProps {
	border?: boolean;
	color?: string;
	title: string;
	titleColor?: string;
	onPress?: () => void;
}

export interface ButtonRef {
	loading: boolean;
	showLoading(): void;
	hideLoading(): void;
}

interface FRRF<T, P> extends React.ForwardRefRenderFunction<T, P> {}

const Button: FRRF<ButtonRef, ButtonProps> = (props, ref) => {
	const { colors } = useTheme();
	const [loading, setLoading] = useState(false);

	const {
		title,
		border,
		color = colors.secundary,
		titleColor = colors.primary,
		onPress = () => {},
	} = props;

	useImperativeHandle(ref, () => ({
		loading,
		showLoading: () => setLoading(true),
		hideLoading: () => setLoading(false),
	}));

	return (
		<Container
			disabled={loading}
			border={border}
			color={color}
			onPress={onPress}
		>
			<Title color={border ? color : titleColor}>{title}</Title>
			{loading && (
				<Loading
					size="small"
					color={border ? colors.secundary : colors.primary}
				/>
			)}
		</Container>
	);
};

export default forwardRef(Button);
