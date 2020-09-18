import React from 'react';

import AuthRouter from './AuthRouter';
import AppRouter from './AppRouter';

import Splash from '../pages/Splash';
import useAuth from '../hooks/useAuth';

const Routes = () => {
	const { logged } = useAuth();

	if (logged === null) {
		return <Splash />;
	}

	if (!logged) {
		return <AuthRouter />;
	}

	return <AppRouter />;
};

export default Routes;
