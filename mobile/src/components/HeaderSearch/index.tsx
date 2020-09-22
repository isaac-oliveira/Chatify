import React, { useEffect, useRef, useState } from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { BackHandler, TextInput as RNTextInput } from 'react-native';

import { TextInput } from './styles';
import Header from '../Header';

interface HeaderSearchProps {
	title: string;
	onChangeSearch(query: string): void;
}

type DrawerProps = DrawerNavigationProp<{}>;

const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
	const { colors } = useTheme();
	const inputRef = useRef<RNTextInput>(null);
	const [query, setQuery] = useState<string>('');
	const [searchVisible, setSearchVisible] = useState<boolean>(false);
	const { title, onChangeSearch } = props;

	const { openDrawer, addListener } = useNavigation<DrawerProps>();

	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			() => {
				let searchShown: boolean = false;
				setSearchVisible((state: boolean) => {
					searchShown = state;
					if (state) {
						return false;
					}
					return state;
				});

				return searchShown;
			},
		);
		return () => {
			backHandler.remove();
		};
	}, []);

	useEffect(() => {
		const unsubscribe = addListener('blur', () => setSearchVisible(false));

		return unsubscribe;
	}, [addListener]);

	useEffect(() => {
		if (searchVisible) {
			inputRef.current?.focus();
		}
	}, [searchVisible]);

	useEffect(() => {
		if (onChangeSearch) {
			onChangeSearch(query);
		}
	}, [query, onChangeSearch]);

	function handleButtonLeft() {
		if (searchVisible) {
			return setSearchVisible(false);
		}
		return openDrawer();
	}

	function handleButtonRight() {
		if (!searchVisible) {
			return setSearchVisible(true);
		}
		return setQuery('');
	}

	const ContentCenter = () => {
		return (
			<TextInput
				ref={inputRef}
				value={query}
				onChangeText={setQuery}
				placeholder="Pesquisa"
				placeholderTextColor={colors.placeholder}
				returnKeyType="search"
			/>
		);
	};

	return (
		<Header
			title={title}
			iconLeft={!searchVisible ? 'menu' : 'keyboard-arrow-left'}
			iconRight={!searchVisible ? 'search' : 'close'}
			onPressLeft={handleButtonLeft}
			onPressRight={handleButtonRight}
			ContentCenter={ContentCenter}
			ContentCenterShown={searchVisible}
		/>
	);
};

export default HeaderSearch;
