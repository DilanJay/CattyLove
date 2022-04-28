const express = require("express");
const router = express.Router();

const {
    addCat,
    getCats,
    getCatById,
    updateLikes
  } = require("../controllers/catController");
  
  router.post("/", addCat);
  router.get("/", getCats);
  router.get("/:id", getCatById);
  router.put("/like/:id", updateLikes);
  module.exports = router;
  