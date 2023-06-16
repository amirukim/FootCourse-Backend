import { Technique, Fitness, Video } from "../models/TechniqueModel.js";

export const getTechniqueModul = async (req, res) => {
  try {
    const technique = await Technique.findAll({
      attributes: ["id", "courseName", "image", "level", "equipment1", "equipment2", "iconEquipment1", "iconEquipment2", "duration"],
    });
    res.json(technique);
  } catch (error) {
    console.log(error);
  }
};

export const getFitnessModul = async (req, res) => {
  try {
    const fitness = await Fitness.findAll({
      attributes: ["id", "courseName", "image", "level", "equipment1", "equipment2", "iconEquipment1", "iconEquipment2", "duration"],
    });
    res.json(fitness);
  } catch (error) {
    console.log(error);
  }
};

export const getModulByAspect = async (req, res) => {
  try {
    const response = await Technique.findAll({
      where: {
        aspect: req.params.aspect,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSelectedModule = async (req, res) => {
  try {
    const selectedModule = await Technique.findOne({
      where: {
        courseName: req.params.courseName,
      },
    });
    res.status(200).json(selectedModule);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSelectedFitnessModule = async (req, res) => {
  try {
    const selectedFitnessModule = await Fitness.findOne({
      where: {
        courseName: req.params.courseName,
      },
    });
    res.status(200).json(selectedFitnessModule);
  } catch (error) {
    console.log(error.message);
  }
};

export const getVideoByModul = async (req, res) => {
  try {
    const techniqueModule = await Video.findAll({
      where: {
        courseName: req.params.courseName,
      },
    });
    res.status(200).json(techniqueModule);
  } catch (error) {
    console.log(error.message);
  }
};
