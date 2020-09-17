import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../logic/auth";
import UserLogic from "../logic/user";

const userLogic = new UserLogic();

export default {
	store: async (request: Request, response: Response) => {
		const { email, password } = request.body;
		try {
			const user = await userLogic.getUser({ email });

			if (!user)
				return response.status(404).json({ error: "Usuário não encontrado." });

			const checkPassword = await bcrypt.compare(password, user.password);
			if (!checkPassword)
				return response.status(400).json({ error: "Senha inválida." });

			const { id } = user;
			const token = generateToken(id);

			return response.status(200).json({ id, token });
		} catch (err) {
			console.log(err);
			return response.status(500).json({ error: "Erro interno no servidor." });
		}
	},
};
