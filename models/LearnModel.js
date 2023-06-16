import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Learns = db.define(
  "learns",
  {
    videoname: { type: DataTypes.STRING },
    videoDuration: { type: DataTypes.STRING },
    videoLink: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);

const Tests = db.define(
  "tests",
  {
    videoname: { type: DataTypes.STRING },
    testName: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING },
    imageTest: { type: DataTypes.STRING },
    details: { type: DataTypes.STRING },
    aspect: { type: DataTypes.STRING },
    beginnerLevel: { type: DataTypes.STRING },
    amateurLevel: { type: DataTypes.STRING },
    proLevel: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);

const Questions = db.define(
  "questions",
  {
    question: { type: DataTypes.STRING },
    answer: { type: DataTypes.STRING },
    testName: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);

export { Learns, Tests, Questions };
