import React from 'react';

import AuthRouter from './AuthRouter';
import AppRouter from './AppRouter';

import Splash from '../pages/Splash';
import useAuth from '../hooks/useAuth';
import MessageProvider from '../provider/MessageProvider';

const Routes = () => {
	const { logged } = useAuth();

	if (logged === null) {
		return <Splash />;
	}

	if (!logged) {
		return <AuthRouter />;
	}

	return (
		<MessageProvider>
			<AppRouter />
		</MessageProvider>
	);
};

export default Routes;
