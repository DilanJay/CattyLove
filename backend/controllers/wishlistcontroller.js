const Cat = require("../models/cat");
const User = require("../models/user");
const Wishlist = require("../models/wishlist");

const addCatIntoUserWishlist = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const { userId, catId } = req.body;

    const cat = await Cat.findById(catId);

    if (user == null) {
      return res.status(406).json({
        data: userId,
        message: "Specific User not found",
      });
    }

    if (cat == null) {
      return res.status(406).json({
        data: catId,
        message: "Specific Cat not found",
      });
    }
    let updatedWishlist;
    const wishlistFromDb = await Wishlist.findOne({ userId: userId });
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
    return res.status(200).json(updatedWishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", err: error });
    next();
  }
};

const removeCatFromWishList = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const { userId, catId } = req.body;

    if (!user) {
      return res.status(406).json({
        data: userId,
        message: "not any user found for this id",
      });
    }

    const isCatfoundOnWishlist = await Wishlist.findOne({
      $and: [{ userId: userId }, { catId: catId }],
    });
    if (isCatfoundOnWishlist == null) {
      return res.status(406).json({
        data: catId,
        message: "not any cat found for this id",
      });
    }

    const wishlist = await Wishlist.updateOne(
      { userId: userId },
      { $pull: { catId: catId } },
      {
        upsert: false,
        multi: true,
      }
    );
    res.status(200).json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getWishlistCats = async (req, res, next) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const wishlist = await Wishlist.findOne({ userId: userId });

    const catIds = wishlist.catId;
    console.log(catIds);

    const records = await Cat.find({ _id: { $in: catIds } });
    res.status(200).json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = {
  addCatIntoUserWishlist,
  removeCatFromWishList,
  getWishlistCats,
};

