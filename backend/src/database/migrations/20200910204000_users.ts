import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable("users", (table) => {
		table.increments("id").primary();
		table.string("avatar");
		table.boolean("online").defaultTo(false);
		table.string("socket_id");
		table.string("name").notNullable();
		table.string("email").notNullable().unique();
		table.string("password").notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable("users");
}
