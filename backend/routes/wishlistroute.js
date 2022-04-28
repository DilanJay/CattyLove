const express = require("express");
const router = express.Router();

const {
  addCatIntoUserWishlist,
  removeCatFromWishList,
  getWishlistCats,
} = require("../controllers/wishlistController");

// register user
router.route("/:id").post(addCatIntoUserWishlist);
router.route("/:id").get(getWishlistCats);
router.route("/removecat/:id").post(removeCatFromWishList);

module.exports = router;
