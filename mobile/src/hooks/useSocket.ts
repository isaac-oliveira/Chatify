import { useState, useEffect } from 'react';
import connectSocket from '../services/socket';

export default function useSocket() {
	const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

	useEffect(() => {
		let socketIO: SocketIOClient.Socket | null = null;

		connectSocket().then((io) => {
			io.on('connect', () => {
				console.log('Connect');
			});
			io.on('disconnect', () => {
				console.log('Disconnect');
			});
			setSocket(io);
			socketIO = io;
		});

		return () => {
			socketIO?.close();
		};
	}, []);

	return socket;
}
