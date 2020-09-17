import { Request, Response } from "express";
import DeviceLogic from "../logic/device";

const deviceLogic = new DeviceLogic();

export default {
	store: async (request: Request, response: Response) => {
		const { token } = request.body;
		const user_id = Number(request.headers.user_id);
		try {
			const device = await deviceLogic.getDevice({ token });
			if (device) {
				await deviceLogic.updateDevice({ token }, { user_id });
			} else {
				await deviceLogic.createDevice({ user_id, token });
			}

			return response.status(204).json();
		} catch (err) {
			console.log(err);
			return response.status(500).json({ error: "Erro interno no servidor." });
		}
	},
	delete: async (request: Request, response: Response) => {
		const { token } = request.params;
		try {
			const device = await deviceLogic.getDevice({ token });
			if (!device) {
				return response
					.status(500)
					.json({ error: "Token Device não encontrado." });
			}

			await deviceLogic.deleteDevice({ token });

			return response.status(204).json();
		} catch (err) {
			console.log(err);
			return response.status(500).json({ error: "Erro interno no servidor." });
		}
	},
};
