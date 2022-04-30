const Cat = require("../models/cat");
const User = require("../models/user");
const Wishlist = require("../models/wishlist");

const addCatIntoUserWishlist = async (req, res, next) => {
  try {
    console.log("reponce body", req.body);
    console.log("params id", req.params.id);
    const user = await User.findById(req.params.id);
    const { userId, catId } = req.body;

    const cat = await Cat.findById(catId);

    if (user == null) {
      return res.json({
        status: "error",
        error: "no any user found for the user id",
      });
    }

    if (cat == null) {
      return res.json({
        status: "error",
        error: "no any cat found for the cat id",
      });
    }
    let updatedWishlist;
    const wishlistFromDb = await Wishlist.findOne({ userId: userId });

    let catObjectArray = [];
    if (wishlistFromDb != null) {
      catObjectArray = wishlistFromDb.catId;
    }
    let catObj = catObjectArray.find((o) => o === catId);
    console.log("CatObject", catObj);
    if (catObj != null) {
      return res.json({
        status: "error",
        error: "This cat already in your wishlist",
      });
    }

    if (wishlistFromDb != null) {
      wishlistFromDb.catId.push(catId);
      updatedWishlist = await wishlistFromDb.save();
    } else {
      const wishlist = await Wishlist.create({
        userId: userId,
      });
      wishlist.catId.push(catId);
      updatedWishlist = await wishlist.save();
    }

    console.log(req);
    return res.status(200).json({ status: "OK", data: updatedWishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", err: error });
    next();
  }
};

const removeCatFromWishList = async (req, res, next) => {
  try {
    console.log("abc");
    const user = await User.findById(req.params.id);
    const { userId, catId } = req.body;

    console.log(user);
    console.log(userId);
    console.log(catId);

    if (!user) {
      return res.status(406).json({ status: "error", error: "no user found" });
    }

    const isCatfoundOnWishlist = await Wishlist.findOne({
      $and: [{ userId: userId }, { catId: catId }],
    });

    console.log(isCatfoundOnWishlist);
    if (isCatfoundOnWishlist == null) {
      return res
        .status(406)
        .json({ status: "error", error: "no any cat found for the cat id" });
    }

    const wishlist = await Wishlist.updateOne(
      { userId: userId },
      { $pull: { catId: catId } },
      {
        upsert: false,
        multi: true,
      }
    );
    return res.status(200).json({ status: "OK", Data: {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", error: error });
    next();
  }
};

const getWishlistCats = async (req, res, next) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const wishlist = await Wishlist.findOne({ userId: userId });

    if (wishlist == null) {
      return res.status(200).json({ status: "OK", data: [] });
    }
    const catIds = wishlist.catId;
    console.log(catIds);

    const records = await Cat.find({ _id: { $in: catIds } });
    res.status(200).json({ status: "OK", data: records });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", error: error });
  }
};
module.exports = {
  addCatIntoUserWishlist,
  removeCatFromWishList,
  getWishlistCats,
};
