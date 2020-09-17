// Update with your config settings.

module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./src/database/dev.sqlite3",
		},
		migrations: {
			directory: "./src/database/migrations",
		},
		useNullAsDefault: true,
	},

	test: {
		client: "sqlite3",
		connection: {
			filename: "./src/database/test.sqlite3",
		},
		migrations: {
			directory: "./src/database/migrations",
		},
		useNullAsDefault: true,
	},

	production: {
		client: "postgresql",
		connection: process.env.DATABASE_URL,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: "./src/database/migrations",
		},
	},
};
