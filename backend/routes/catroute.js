const express = require("express");
const router = express.Router();

const {
    addCat,
    getCats,
    getCatById
  } = require("../controllers/catController");
  
  router.post("/", addCat);
  router.get("/", getCats);
  router.get("/:id", getCatById);
 
  module.exports = router;
  