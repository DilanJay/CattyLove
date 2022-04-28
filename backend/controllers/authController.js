const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
require('dotenv').config(); 
const JWT_SECRET = process.env.MONGO_URI; 
const register = async (req, res, next) => {
    try {
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
      res.status(200).json(cat);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error", err: error });
      next();
    }
  };

module.exports = {
    register
}