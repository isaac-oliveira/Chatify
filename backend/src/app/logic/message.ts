import admin from "../../services/firebase";

export const sendMessage = (
	token: string | string[],
	name: string,
	message: string
) => {
	admin
		.messaging()
		.sendToDevice(
			token,
			{
				notification: {
					title: name,
					body: message,
				},
				data: {
					message,
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
