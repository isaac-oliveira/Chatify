import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../pages/Home';
import { useTheme } from 'styled-components';

const { Navigator, Screen } = createBottomTabNavigator();

interface TabBarIconProps {
	name: string;
	color: string;
}

interface KeyStringObject {
	[key: string]: string;
}

const iconNames: KeyStringObject = {
	Chats: 'speaker-notes',
	Users: 'add-comment',
};

const TabBarIcon = (props: TabBarIconProps) => {
	const name = iconNames[props.name] || 'info';

	return <Icon {...props} name={name} size={24} />;
};

const TabsRouter = () => {
	const { colors } = useTheme();

	return (
		<Navigator
			tabBarOptions={{
				showLabel: false,
				activeTintColor: colors.active,
				inactiveTintColor: colors.inactive,
				style: {
					borderTopWidth: 0,
				},
			}}
			screenOptions={({ route: { name } }) => ({
				tabBarIcon: (props) => <TabBarIcon {...props} name={name} />,
			})}
		>
			<Screen name="Chats" component={Home} />
			<Screen name="Users" component={Home} />
		</Navigator>
	);
};

export default TabsRouter;
