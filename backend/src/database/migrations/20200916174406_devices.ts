import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable("devices", (table) => {
		table.increments("id").primary();
		table.integer("user_id").notNullable();
		table.string("token").unique().notNullable();

		table.foreign("user_id").references("id").inTable("users");
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable("devices");
}
