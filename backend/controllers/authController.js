const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
require('dotenv').config(); 
const JWT_SECRET = process.env.MONGO_URI; 

module.exports = {}