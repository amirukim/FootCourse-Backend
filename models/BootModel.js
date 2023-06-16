import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Boots = db.define(
  "boots",
  {
    bootName: { type: DataTypes.STRING },
    details: { type: DataTypes.STRING },
    bootImage1: { type: DataTypes.STRING },
    bootImage2: { type: DataTypes.STRING },
    bootImage3: { type: DataTypes.STRING },
    details: { type: DataTypes.STRING },
    position: { type: DataTypes.STRING },
    footShape: { type: DataTypes.STRING },
    material: { type: DataTypes.STRING },
    price: { type: DataTypes.STRING },
    ground: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);

export default Boots;
