import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { name, email, password, position, confPassword } = req.body;
  if (password !== confPassword) {
    return res.status(400).json({ msg: "Password you enter doesnt same" });
  }
  try {
    const existingUser = await Users.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email is already taken" });
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    await Users.create({
      name: name,
      email: email,
      position: position,
      password: hashPassword,
    });
    res.json({ msg: "Register done" });
  } catch (error) {
    console.error(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Wrong password" });
    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "20s",
    });
    const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });

    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email not registered" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refreshToken: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

export const updateTestLevel = async (req, res) => {
  try {
    await Users.update(req.body, {
      where: {
        name: req.params.name,
      },
    });
    res.status(200).json({ msg: "Submitted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsersByName = async (req, res) => {
  try {
    const response = await Users.findOne({
      where: {
        name: req.params.name,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
