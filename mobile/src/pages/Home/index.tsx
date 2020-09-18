import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';

const Home = () => {
	const { logout } = useAuth();

	function handleLogout() {
		logout();
	}

	return (
		<View>
			<Text>Home</Text>
			<Button title="Sair" onPress={handleLogout} />
		</View>
	);
};

export default Home;
