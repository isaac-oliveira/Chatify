import React from 'react';

import AuthRouter from './AuthRouter';
import useAuth from '../hooks/useAuth';
import Splash from '../pages/Splash';

const Routes = () => {
	const { logged } = useAuth();

	if (!logged) {
		return <Splash />;
	}

	return <AuthRouter />;
};

export default Routes;
