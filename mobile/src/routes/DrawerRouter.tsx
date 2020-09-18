import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsRouter from './TabsRouter';

const { Navigator, Screen } = createDrawerNavigator();

const DrawerRouter = () => {
	return (
		<Navigator>
			<Screen name="Tabs" component={TabsRouter} />
		</Navigator>
	);
};

export default DrawerRouter;
