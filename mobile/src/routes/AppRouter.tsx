import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';

const { Navigator, Screen } = createStackNavigator();

const AppRouter = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Home" component={Home} />
		</Navigator>
	);
};

export default AppRouter;
