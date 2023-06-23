import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import Users from "./models/UserModel.js";
//import { Learns, Tests, Questions } from "./models/LearnModel.js";
//import { Technique, Fitness, Video } from "./models/TechniqueModel.js";
//import Boots from "./models/BootModel.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000
try {
  await db.authenticate();
  console.log("Database connected...");
  //await db.sync();
  //await Learns.sync();
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin:"https://footcourse.netlify.app" }));
//app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

//app.listen(5000, () => console.log("Server Running at port 5000"));
app.listen(port, "0.0.0.0", () => console.log("Server Running at port 5000"));
