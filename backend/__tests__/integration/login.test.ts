import request from "supertest";
import bcrypt from "bcrypt";

import app from "../../src/app";
import connection from "../../src/database";

const user = {
	avatar: null,
	name: "Isaac Santos de Oliveira",
	email: "isaac@gmail.com",
	password: "12345",
};

beforeAll(async () => {
	const hash = await bcrypt.hash(user.password, 16);
	await connection("users").insert({ ...user, password: hash });
});

afterAll(async () => {
	await connection("users").truncate();
});

test("it should receive JWT token when authenticated with valid credentials", async () => {
	const { status, body } = await request(app).post("/login").send({
		email: user.email,
		password: user.password,
	});

	expect(status).toBe(200);
	expect(body.id).toBeDefined();
	expect(body.token).toBeDefined();
});
