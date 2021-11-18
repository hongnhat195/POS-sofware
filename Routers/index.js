import express from "express";
import itemRoute from "./item.router";
const rootRouter = express.Router();
rootRouter.use("/item", itemRoute);
export default rootRouter;
