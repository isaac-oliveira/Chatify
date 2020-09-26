import Realm from 'realm';
import { Chat } from '../components/ChatItem';

const ChatSchema: Realm.ObjectSchema = {
	name: 'Chat',
	primaryKey: 'id',
	properties: {
		id: 'int',
		name: 'string',
		message: 'string',
		time: 'string',
		viewed: 'bool',
	},
};

const realm = new Realm({ schema: [ChatSchema] });

export const insertChat = (chat: Chat) => {
	realm.write(() => {
		realm.create<Chat>('Chat', chat, Realm.UpdateMode.Modified);
	});
};

export const getChats = (): Chat[] => {
	const chats = realm.objects<Chat>('Chat').map((item: Chat) => item);

	return chats;
};
