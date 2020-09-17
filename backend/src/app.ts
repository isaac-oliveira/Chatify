if (process.env.NODE_ENV !== "production") require("dotenv/config");
import express from "express";
import Routes from "./routes";

const app = express();

app.use(express.json());
app.use(Routes);

export default app;
