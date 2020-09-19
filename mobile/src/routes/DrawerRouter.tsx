import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TabsRouter from './TabsRouter';
import DrawerContent from '../components/DrawerContent';
import useAuth from '../hooks/useAuth';

const { Navigator, Screen } = createDrawerNavigator();

interface DrawerIconProps {
	name: string;
	color: string;
	size: number;
}

interface KeyStringObject {
	[key: string]: string;
}

const iconNames: KeyStringObject = {
	Tabs: 'home',
	Profile: 'account-circle',
};

const labels: KeyStringObject = {
	Tabs: 'Home',
	Profile: 'Perfil',
};

const DrawerIcon = (props: DrawerIconProps) => {
	const name = iconNames[props.name] || 'info';

	return <Icon {...props} name={name} />;
};

const DrawerRouter = () => {
	const { colors } = useTheme();
	const { logout } = useAuth();

	return (
		<Navigator
			drawerContent={(props) => <DrawerContent {...props} logout={logout} />}
			drawerContentOptions={{
				activeTintColor: colors.textPrimary,
			}}
			screenOptions={({ route: { name } }) => ({
				drawerIcon: (props) => <DrawerIcon name={name} {...props} />,
				drawerLabel: labels[name] || '',
			})}
		>
			<Screen name="Tabs" component={TabsRouter} />
			<Screen name="Profile" component={TabsRouter} />
		</Navigator>
	);
};

export default DrawerRouter;
