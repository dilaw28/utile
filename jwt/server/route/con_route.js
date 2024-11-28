import express from "express";
import { singup, login } from "../control/auth.js";
import { authenticate } from "../middel/authentificate.js";

const route = express.Router();

route.post("/connection/singup", singup);
route.post("/connection/login", authenticate, login);


export default route;
