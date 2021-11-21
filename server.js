import express from "express";
import { sequelize } from "./models";
import rootRouter from "./routers";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", rootRouter);
app.listen(process.env.PORT || 5000, async () => {
  console.log("App listening on http://localhost:5000");
  try {
    await sequelize.authenticate();
    console.log("Connection database successfully");
  } catch (error) {
    console.log("Unable to connect to database");
  }
});
