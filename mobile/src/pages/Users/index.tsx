import React from 'react';
import HeaderSearch from '../../components/HeaderSearch';

import { Container } from './styles';

const Users = () => {
	return (
		<Container>
			<HeaderSearch title="Usuários" onChangeSearch={() => {}} />
		</Container>
	);
};

export default Users;
