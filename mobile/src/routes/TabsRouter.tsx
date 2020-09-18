import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';

const { Navigator, Screen } = createBottomTabNavigator();

//mdi_speaker_notes
//mdi_add_comment
const TabsRouter = () => {
	return (
		<Navigator>
			<Screen name="Chat" component={Home} />
		</Navigator>
	);
};

export default TabsRouter;
