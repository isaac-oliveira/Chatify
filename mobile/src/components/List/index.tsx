import React from 'react';
import { FlatList, FlatListProps } from 'react-native';

import { Loading, MessageEmpty } from './styles';

interface ListProps<ItemT = any> extends FlatListProps<ItemT> {
	loading?: boolean;
	messageEmpty?: string;
}

export class List<ItemT = any> extends React.Component<ListProps<ItemT>> {
	render() {
		const { loading, messageEmpty, ...rest } = this.props;

		if (loading) {
			return <Loading />;
		}

		if (rest.data?.length === 0) {
			return <MessageEmpty>{messageEmpty || 'Vazio'}</MessageEmpty>;
		}
		return <FlatList<ItemT> {...rest} />;
	}
}

export default List;
