import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import { TextInput } from './styles';

export interface InputRef {
	focus(): void;
	clear(): void;
	value: string;
}

interface InputProps extends TextInputProps {
	color?: string;
}

interface FRRF<T, P> extends React.ForwardRefRenderFunction<T, P> {}

const Input: FRRF<InputRef, InputProps> = (props, ref) => {
	const { colors } = useTheme();
	const inputRef = useRef<RNTextInput>(null);
	const [value, setValue] = useState<string>(String(props?.defaultValue || ''));

	useImperativeHandle(ref, () => ({
		focus: () => {
			inputRef.current?.focus();
		},
		clear: () => {
			setValue('');
		},
		value: value,
	}));

	return (
		<TextInput
			ref={inputRef}
			placeholderTextColor={colors.placeholder}
			{...props}
			value={value}
			onChangeText={setValue}
		/>
	);
};

export default forwardRef(Input);
