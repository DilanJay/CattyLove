const express = require('express');
const router = express.Router();

const {
  register,
  login,
  changepassword,
} = require('../controllers/authController'); 

// register user
router.route('/register').post(register);

// login
router.route('/login').post(login);

// chang password
router.route('/changepassword').post(changepassword);


module.exports = router;