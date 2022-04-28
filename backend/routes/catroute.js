const express = require("express");
const router = express.Router();

const {
    addCat,
  } = require("../controllers/catController");
  
  router.post("/", addCat);
  module.exports = router;
  