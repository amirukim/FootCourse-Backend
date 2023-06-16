import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Technique = db.define(
  "technique",
  {
    courseName: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    level: { type: DataTypes.STRING },
    equipment1: { type: DataTypes.STRING },
    equipment2: { type: DataTypes.STRING },
    iconEquipment1: { type: DataTypes.STRING },
    iconEquipment2: { type: DataTypes.STRING },
    position: { type: DataTypes.STRING },
    duration: { type: DataTypes.INTEGER },
    aspect: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);

const Fitness = db.define(
  "fitness",
  {
    courseName: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    level: { type: DataTypes.STRING },
    equipment1: { type: DataTypes.STRING },
    equipment2: { type: DataTypes.STRING },
    iconEquipment1: { type: DataTypes.STRING },
    iconEquipment2: { type: DataTypes.STRING },
    duration: { type: DataTypes.INTEGER },
    aspect: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);

const Video = db.define(
  "video",
  {
    videoName: { type: DataTypes.STRING },
    courseName: { type: DataTypes.STRING },
    courselevel: { type: DataTypes.STRING },
    detail: { type: DataTypes.STRING },
    videoLocation: { type: DataTypes.STRING },
    aspect: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);

export { Technique, Fitness, Video };
