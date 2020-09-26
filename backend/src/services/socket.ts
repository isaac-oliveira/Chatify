import socket from "socket.io";
import { Server } from "http";
import socketAuth, { MySocket } from "../app/middlewares/socketAuth";
import UserLogic from "../app/logic/user";
import DeviceLogic from "../app/logic/device";
import { sendMessage } from "../app/logic/message";

function createSocket(server: Server) {
	const io = socket(server);

	io.use(socketAuth);

	io.on("connection", async (socket: MySocket) => {
		const { userId } = socket;
		const users = new UserLogic();
		await users.updateUser(
			{ id: userId },
			{ online: true, socket_id: socket.id }
		);

		console.log("Socket conectado:", socket.id, "User ID:", userId);

		socket.on("message", async (data) => {
			console.log(data);
			const userSendMessage = await users.getUser({ id: userId });
			const userReceivedMessage = await users.getUser({ id: data.userId });
			console.log(userReceivedMessage);
			if (userReceivedMessage.online) {
				socket.to(userReceivedMessage.socket_id).emit("receivedMessage", {
					...data,
					userId: userSendMessage.id,
					name: userSendMessage.name,
				});
				return;
			} else {
				const device = new DeviceLogic();
				const tokens = await device.getTokenDevicesByUser(
					userReceivedMessage.id
				);
				if (tokens.length !== 0)
					sendMessage(tokens, userSendMessage.name, data.message);
				else console.log("Nenhum token device encontrado");
			}
		});

		socket.on("disconnect", async (reason) => {
			await users.updateUser(
				{ id: socket.userId },
				{ online: false, socket_id: null }
			);

			console.log("Socket desconectado:", socket.id, "User ID:", socket.userId);
		});
	});
	return io;
}

//http://localhost:3333/?token=&userId=2

export default createSocket;
