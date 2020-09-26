import Realm from 'realm';
import { Message } from '../components/MessageItem';

const MessageSchema: Realm.ObjectSchema = {
	name: 'Message',
	primaryKey: 'id',
	properties: {
		id: 'int',
		text: 'string',
		sendUserId: 'int',
		receivedUserId: 'int',
	},
};

const realm = new Realm({ schema: [MessageSchema] });

export const insertMessage = (message: Message) => {
	realm.write(() => {
		realm.create<Message>('Message', message, Realm.UpdateMode.Never);
	});
};

export const getMessages = (userId: number): Message[] => {
	const Messages = realm
		.objects<Message>('Message')
		.filter(
			(item: Message) =>
				item.sendUserId === userId || item.receivedUserId === userId,
		)
		.reverse();

	return Messages;
};
