import express from "express";

import LoginController from "./app/controllers/LoginController";
import RegisterController from "./app/controllers/RegisterController";
import UserController from "./app/controllers/UserController";
import DeviceController from "./app/controllers/DeviceController";
import appAuth from "./app/middlewares/appAuth";

const Router = express.Router();

Router.post("/login", LoginController.store);
Router.post("/register", RegisterController.store);

Router.get("/users", appAuth, UserController.index);

Router.get("/user", appAuth, UserController.show);
Router.put("/user", appAuth, UserController.update);

Router.post("/device", appAuth, DeviceController.store);
Router.delete("/device/:token", appAuth, DeviceController.delete);

export default Router;
