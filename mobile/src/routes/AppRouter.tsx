import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerRouter from './DrawerRouter';

const { Navigator, Screen } = createStackNavigator();

const AppRouter = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Drawer" component={DrawerRouter} />
		</Navigator>
	);
};

export default AppRouter;
