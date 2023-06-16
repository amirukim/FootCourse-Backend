import { where } from "sequelize";
import { Learns, Tests, Questions } from "../models/LearnModel.js";

export const getFitnessTest = async (req, res) => {
  try {
    const fitnessTest = await Tests.findAll({
      where: {
        category: "Fitness",
      },
    });
    res.json(fitnessTest);
  } catch (error) {
    console.log(error);
  }
};

export const getTechniqueTest = async (req, res) => {
  try {
    const techniqueTest = await Tests.findAll({
      where: {
        category: "Technique",
      },
    });
    res.json(techniqueTest);
  } catch (error) {
    console.log(error);
  }
};

export const getSelectedTest = async (req, res) => {
  try {
    const selectedTest = await Tests.findOne({
      where: {
        testName: req.params.testName,
      },
    });
    res.status(200).json(selectedTest);
  } catch (error) {
    console.log(error.message);
  }
};
