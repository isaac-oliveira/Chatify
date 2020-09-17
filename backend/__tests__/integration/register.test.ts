import request from "supertest";

import app from "../../src/app";
import connection from "../../src/database";

const user = {
	avatar: null,
	name: "Isaac Santos de Oliveira",
	email: "isaac@gmail.com",
	password: "12345",
};

afterAll(async () => {
	await connection("users").truncate();
});

test("it should create a user", async () => {
	const { status, body } = await request(app).post("/register").send(user);

	expect(status).toBe(201);
	expect(body.id).toBeDefined();
	expect(body.token).toBeDefined();
});
