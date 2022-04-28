const express = require("express");
const router = express.Router();

const {
    addCat,
    getCatById,
  } = require("../controllers/catController");
  
  router.post("/", addCat);
  router.get("/:id", getCatById);

  module.exports = router;
  