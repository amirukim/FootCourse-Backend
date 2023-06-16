import { Sequelize } from "sequelize";
//require("dotenv").config();
//require("dotenv").config({ path: "backend/.env" });

/*const db = new Sequelize("footcourse", "root", "", {
  host: "localhost",
  dialect: "mysql",
});*/

const db = new Sequelize("railway", "root", "4JJwhRO1inHhma8H7Pm7", {
  host: "containers-us-west-7.railway.app",
  port: "7566",
  dialect: "mysql",
});

export default db;
