import userModel from "../models/user.entity.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const userData = req.body;
  const existingUser = await userModel.findOne({ email: userData.email });
  if (existingUser) {
    return res.status(400).send("User already exist.");
  }
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = new userModel();
  newUser.name = userData.name;
  newUser.email = userData.email;
  newUser.password = hashedPassword;
  newUser
    .save()
    .then((result) => {
      const token = jwt.sign({ email: result.email, id: result._id }, "Sharif");
      return res.status(201).json({
        message: "signed up successfully",
        user: result,
        token: token,
      });
    })
    .catch((err) => console.log(err));
};

// funtion to sigin
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });
    console.log(existingUser);
    if (!existingUser) {
      return res.status(400).send("user does not exist");
    }

    const correctPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!correctPassword) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "Sharif"
    );
    res.status(201).json({
      message: "login successfully",
      user: existingUser,
      token: token,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
