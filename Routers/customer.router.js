import { check, login, payment } from "../controller/cus.controller";

const express = require("express");
const cusRouter = express.Router();
cusRouter.post("/", login);
cusRouter.post("/payment", payment);
cusRouter.get("/check", check);
export default cusRouter;
