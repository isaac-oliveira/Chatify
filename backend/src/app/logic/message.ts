import admin from "../../services/firebase";
import { User } from "./user";

export const sendMessage = (
	token: string | string[],
	user: User,
	message: string
) => {
	admin
		.messaging()
		.sendToDevice(
			token,
			{
				notification: {
					title: user.name,
					body: message,
				},
				data: {
					message,
					name: user.name,
					userId: String(user.id),
				},
			},
			{
				contentAvailable: true,
				priority: "high",
			}
		)
		.then(function (result) {
			console.log("Sucess:", result);
		})
		.catch(function (error) {
			console.log("Error:", error);
		});
};
