import express from "express";
import { getListItem } from "../controller/item.controller";
const itemRoute = express.Router();
itemRoute.get("/", getListItem);
export default itemRoute;
