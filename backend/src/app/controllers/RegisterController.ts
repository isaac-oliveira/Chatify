import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../logic/auth";
import UserLogic from "../logic/user";

const userLogic = new UserLogic();

export default {
	store: async (request: Request, response: Response) => {
		const { name, email, password } = request.body;
		try {
			const user = await userLogic.getUser({ email });
			if (user)
				return response
					.status(400)
					.json({ error: "Esse e-mail já foi cadastrado." });

			const hash = await bcrypt.hash(password, 16);

			const id = await userLogic.createUser({
				name,
				email,
				password: hash,
			});

			const token = generateToken(id);

			return response.status(201).json({ id, token });
		} catch (err) {
			console.log(err);
			return response.status(500).json({ error: "Erro interno no servidor." });
		}
	},
};
