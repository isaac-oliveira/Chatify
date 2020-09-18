import React from 'react';

import AuthRouter from './AuthRouter';
import useAuth from '../hooks/useAuth';
import Splash from '../pages/Splash';
import Home from '../pages/Home';

const Routes = () => {
	const { logged } = useAuth();

	if (logged === null) {
		return <Splash />;
	}

	if (!logged) {
		return <AuthRouter />;
	}

	return <Home />;
};

export default Routes;
