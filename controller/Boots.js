import Boots from "../models/BootModel.js";

export const getBoot = async (req, res) => {
  try {
    const boots = await Boots.findAll({
      attributes: ["id", "bootName", "brand", "details", "bootImage1", "bootImage2", "bootImage3", "position", "footShape", "material", "price", "ground", "buyLink"],
    });
    res.json(boots);
  } catch (error) {
    console.log(error);
  }
};
export const getBootById = async (req, res) => {
  try {
    const response = await Boots.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
