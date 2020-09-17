import { NextFunction } from "express";
import { Socket } from "socket.io";
import { validateToken } from "../logic/auth";

export interface MySocket extends Socket {
	userId: number;
}

const socketAuth = (socket: MySocket, next: NextFunction) => {
	if (socket.handshake.query && socket.handshake.query.token) {
		const { logged, user_id } = validateToken(socket.handshake.query.token);
		if (logged) {
			socket.userId = user_id;
			return next();
		}
		return next(new Error("Token inválido"));
	}
	return next(new Error("Authentication error"));
};

export default socketAuth;
