import express from "express";
import path from "path";
import http from "http";
import ejs from "ejs";

import app from "./app";
import createServer from "./services/socket";

const server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, "..", "public")));
app.set("views", path.resolve(__dirname, "..", "public"));
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

app.use("/", (request, response) => {
	return response.render("index.html");
});

createServer(server);

server.listen(process.env.PORT || 3333);

export default server;
