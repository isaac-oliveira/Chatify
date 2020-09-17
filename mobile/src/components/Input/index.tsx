import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import { TextInputProps } from 'react-native';
import { TextInput as RNTextInput } from 'react-native';
import { useTheme } from 'styled-components';

import { TextInput } from './styles';

interface InputRef {
	focus(): void;
	value: string;
}

interface FRRF<T, P> extends React.ForwardRefRenderFunction<T, P> {}

const Input: FRRF<InputRef, TextInputProps> = (props, ref) => {
	const { colors } = useTheme();
	const inputRef = useRef<RNTextInput>(null);
	const [value, setValue] = useState<string>('');

	useImperativeHandle(ref, () => ({
		focus: () => {
			inputRef.current?.focus();
		},
		value: value,
	}));

	return (
		<TextInput
			ref={inputRef}
			{...props}
			placeholderTextColor={colors.placeholder}
			value={value}
			onChangeText={setValue}
		/>
	);
};

export default forwardRef(Input);
