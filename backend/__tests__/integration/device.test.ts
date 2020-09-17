import request from "supertest";
import bcrypt from "bcrypt";

import app from "../../src/app";
import connection from "../../src/database";
import { generateToken } from "../../src/app/logic/auth";
import { User } from "../../src/app/logic/user";

const user1 = {
	avatar: null,
	name: "Isaac Santos de Oliveira",
	email: "isaac@gmail.com",
	password: "12345",
};

const user2 = {
	avatar: null,
	name: "Iasmim dos Santos Oliveira",
	email: "iasmim@gmail.com",
	password: "12345",
};

let token: string;
let id: number;

beforeEach(async () => {
	const hash = await bcrypt.hash(user1.password, 16);

	const ids = await connection("users").insert({ ...user1, password: hash });
	id = ids[0];
	token = generateToken(ids[0]);
});

afterEach(async () => {
	await connection("devices").truncate();
	await connection("users").truncate();
});

test("it should be insert a device token in database", async () => {
	const { status } = await request(app)
		.post("/device")
		.set("Authorization", `Bearer ${token}`)
		.send({
			token: "sfsfssdffsfsfa",
		});

	expect(status).toBe(204);

	const device = await connection("devices")
		.where({ user_id: id })
		.select("*")
		.first();

	expect(device.token).toBe("sfsfssdffsfsfa");
});

test("it should be update user_id if device token exists", async () => {
	const hash = await bcrypt.hash(user2.password, 16);

	const ids = await connection("users").insert({ ...user2, password: hash });
	const id2 = ids[0];
	token = generateToken(ids[0]);

	await connection("devices").insert({ token: "sfsfssdffsfsfa", user_id: id });

	const { status } = await request(app)
		.post("/device")
		.set("Authorization", `Bearer ${token}`)
		.send({
			token: "sfsfssdffsfsfa",
		});

	expect(status).toBe(204);

	const device = await connection("devices")
		.where({ user_id: id2 })
		.select("*")
		.first();

	expect(device.token).toBe("sfsfssdffsfsfa");
});

test("it should be delete device token in database", async () => {
	await connection("devices").insert({ token: "sfsfssdffsfsfa", user_id: id });

	const { status } = await request(app)
		.delete("/device/sfsfssdffsfsfa")
		.set("Authorization", `Bearer ${token}`);

	expect(status).toBe(204);

	const device = await connection("devices")
		.where({ token: "sfsfssdffsfsfa" })
		.select("*")
		.first();

	expect(device).toBeUndefined();
});
