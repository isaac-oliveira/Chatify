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

const user3 = {
	avatar: null,
	name: "Victor Queiroz de Souza",
	email: "victorq@gmail.com",
	password: "12345",
};

let token: string;
let id: number;

beforeEach(async () => {
	const hash = await bcrypt.hash(user1.password, 16);

	const ids = await connection("users").insert([
		{ ...user1, password: hash },
		{ ...user2, password: hash },
		{ ...user3, password: hash },
	]);
	id = ids[0];
	token = generateToken(ids[0]);
});

afterEach(async () => {
	await connection("users").truncate();
});

test("it should return all the users in database", async () => {
	const { status, body } = await request(app)
		.get("/users")
		.set("Authorization", `Bearer ${token}`);

	expect(status).toBe(200);
	expect(body).toHaveLength(2);
});

test("it should return filtered users", async () => {
	const { status, body } = await request(app)
		.get("/users?filter=iasmim%20santos")
		.set("Authorization", `Bearer ${token}`);

	expect(status).toBe(200);
	expect(body).toHaveLength(1);
	expect(body[0].name).toBe(user2.name);
});

test("it should return a user", async () => {
	const { status, body } = await request(app)
		.get("/user")
		.set("Authorization", `Bearer ${token}`);

	expect(status).toBe(200);
	expect(body.name).toBe(user3.name);
});

test("it should update a user", async () => {
	const { status } = await request(app)
		.put("/user")
		.set("Authorization", `Bearer ${token}`)
		.send({
			name: "Novo Nome",
		});

	const user = (await connection("users")
		.where({ id })
		.select("*")
		.first()) as User;

	expect(user.name).toBe("Novo Nome");

	expect(status).toBe(204);
});
