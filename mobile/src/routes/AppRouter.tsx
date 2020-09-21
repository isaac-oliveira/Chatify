import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerRouter from './DrawerRouter';
import Messages from '../pages/Messages';

const { Navigator, Screen } = createStackNavigator();

const AppRouter = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Drawer" component={DrawerRouter} />
			<Screen name="Messages" component={Messages} />
		</Navigator>
	);
};

export default AppRouter;
