const express = require('express');
const router = express.Router();

const {register} = require('../controllers/authController'); 
// register user
router.route('/register').post(register);

module.exports = router;