const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.MONGO_URI;
const register = async (req, res, next) => {
  try {
    console.log(req.body);
    let {
      username,
      password: plainTextPassword,
      firstName,
      lastName,
      email,
      contactNumber,
      gender,
      birthday,
      profession,
    } = req.body;

    if (!username || typeof username !== "string") {
      return res.json({ status: "error", error: "Invalid username" });
    }

    if (!plainTextPassword || typeof plainTextPassword !== "string") {
      return res.json({ status: "error", error: "Invalid password" });
    }

    if (plainTextPassword.length < 5) {
      return res.json({
        status: "error",
        error: "Password too small. Should be atleast 6 characters",
      });
    }

    const password = await bcrypt.hash(plainTextPassword, 10);

    const cat = await User.create({
      username,
      password,
      firstName,
      lastName,
      email,
      contactNumber,
      gender,
      birthday,
      profession,
    });

    console.log(req);
    res.status(200).json({ status: "OK", data: cat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", error: error });
    next();
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).lean();

    if (!user) {
      return res.json({ status: "error", error: "Invalid username/password" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        JWT_SECRET
      );

      console.log(token);
      return res.json({ status: "OK", data: token });
    }

    res.json({ status: "error", error: "Invalid username/password" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", error: error });
    next();
  }
};

const changepassword = async (req, res) => {
  const { token, newpassword: plainTextPassword } = req.body;

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }

  if (plainTextPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password too small. Should be atleast 6 characters",
    });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);

    const _id = user.id;

    const password = await bcrypt.hash(plainTextPassword, 10);

    await User.updateOne(
      { _id },
      {
        $set: { password },
      }
    );
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: ";))" });
  }
};

module.exports = {
  register,
  login,
  changepassword,
};