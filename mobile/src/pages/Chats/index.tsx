import React from 'react';
import HeaderSearch from '../../components/HeaderSearch';

import { Container } from './styles';

const Chats = () => {
	return (
		<Container>
			<HeaderSearch title="Chats" onChangeSearch={() => {}} />
		</Container>
	);
};

export default Chats;
