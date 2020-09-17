import { Request, Response } from "express";
import UserLogic from "../logic/user";

const userLogic = new UserLogic();

export default {
	index: async (request: Request, response: Response) => {
		const { filter } = request.query;
		const user_id = Number(request.headers.user_id);
		try {
			const users = await userLogic.getUsers((value) => {
				if (value.id === user_id) return false;
				if (filter) {
					const name = value.name.toLowerCase().trim();
					const words = String(filter).toLowerCase().split(" ");

					const every = words.every((word) => {
						return name.includes(word);
					});

					return every;
				}
				return true;
			});

			return response.status(200).json(users);
		} catch (err) {
			console.log(err);
			return response.status(500).json({ error: "Erro interno no servidor." });
		}
	},
	show: async (request: Request, response: Response) => {
		const id = Number(request.headers.user_id);
		try {
			const user = await userLogic.getUser({ id });

			return response.status(200).json(user);
		} catch (err) {
			console.log(err);
			return response.status(500).json({ error: "Erro interno no servidor." });
		}
	},
	update: async (request: Request, response: Response) => {
		const id = Number(request.headers.user_id);
		const { avatar, online, name, email, password } = request.body;
		try {
			await userLogic.updateUser(
				{ id },
				{ avatar, online, name, email, password }
			);

			return response.status(204).json();
		} catch (err) {
			console.log(err);
			return response.status(500).json({ error: "Erro interno no servidor." });
		}
	},
};
