import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "users",
  {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    position: { type: DataTypes.STRING },
    phoneNo: { type: DataTypes.STRING },
    level: { type: DataTypes.STRING },
    Speed: { type: DataTypes.STRING },
    Agility: { type: DataTypes.STRING },
    Strength: { type: DataTypes.STRING },
    Finishing: { type: DataTypes.STRING },
    Dribbling: { type: DataTypes.STRING },
    Passing: { type: DataTypes.STRING },
    Header: { type: DataTypes.STRING },
    Control: { type: DataTypes.STRING },
    Crossing: { type: DataTypes.STRING },
    refresh_token: { type: DataTypes.TEXT },
  },
  {
    freezeTableName: true,
  }
);

export default Users;
