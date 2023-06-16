import { Learns, Tests, Questions } from "../models/LearnModel.js";

export const getLearnModul = async (req, res) => {
  try {
    const learns = await Learns.findAll({
      attributes: ["id", "image", "videoname", "videoDuration", "videoLink"],
    });
    res.json(learns);
  } catch (error) {
    console.log(error);
  }
};
