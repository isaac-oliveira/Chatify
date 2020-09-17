import connection from "../../src/database";
import DeviceLogic from "../../src/app/logic/device";

let deviceLogic: DeviceLogic;

beforeAll(() => {
	deviceLogic = new DeviceLogic();
});

afterAll(async () => {
	await connection("devices").truncate();
});

test("it should be add token device in database", async () => {
	const id = await deviceLogic.createDevice({
		user_id: 1,
		token: "adsvnjvnfjanvjvnvjsnvkjsnjnsc",
	});

	const device = await connection("devices").where({ id }).select("*").first();

	expect(device.user_id).toBe(1);
	expect(device.token).toBe("adsvnjvnfjanvjvnvjsnvkjsnjnsc");
});

test("it should be return tokens device in database", async () => {
	const tokens = await deviceLogic.getTokenDevicesByUser(1);

	expect(tokens[0]).toBe("adsvnjvnfjanvjvnvjsnvkjsnjnsc");
});
