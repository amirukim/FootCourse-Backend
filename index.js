import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import Users from "./models/UserModel.js";

dotenv.config();

const app = express();

async function startServer() {
  const port = process.env.PORT || 3306;
  try {
    await db.authenticate();
    console.log("Database connected...");
    //await db.sync();
    //await Learns.sync();
  } catch (error) {
    console.error(error);
  }

  app.use(cors({ credentials: true, origin: "https://footcourse.netlify.app" }));
  //app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
  app.use(cookieParser());
  app.use(express.json());
  app.use(router);

  //app.listen(5000, () => console.log("Server Running at port 5000"));
  app.listen(port, "127.0.0.1", () => console.log("Server Running at port 5000"));
}

startServer();
