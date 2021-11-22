import express from "express";
import cusRouter from "./customer.router";
import itemRoute from "./item.router";
const rootRouter = express.Router();
rootRouter.use("/item", itemRoute);
rootRouter.use("/cus", cusRouter);
export default rootRouter;
