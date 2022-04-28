const express = require('express');
const router = express.Router();

const {register,login,changepassword} = require('../controllers/authController'); 
// register user
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/changepassword').post(changepassword);
module.exports = router;