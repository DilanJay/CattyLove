const express = require("express");
const router = express.Router();

const { addCommentForCat } = require("../controllers/commentController");

// register user
router.route("/:id").post(addCommentForCat);
// router.route("/:id").get(getWishlistCats);
// router.route("/removecat/:id").post(removeCatFromWishList);

module.exports = router;
