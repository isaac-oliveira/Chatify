import knex from "knex";

const config = require("../../knexfile");
const connection = knex(config[process.env.NODE_ENV || "development"]);

export default connection;
