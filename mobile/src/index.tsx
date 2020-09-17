import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import theme from './themes';

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				barStyle="light-content"
				backgroundColor={theme.colors.primary}
			/>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<Routes />
				</NavigationContainer>
			</ThemeProvider>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.primary,
	},
});

export default App;
