import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from '../pages/Initial';

const { Navigator, Screen } = createStackNavigator();

const AuthRouter = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Initial" component={Initial} />
		</Navigator>
	);
};

export default AuthRouter;
