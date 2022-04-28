const Cat = require("../models/cat");
const User = require("../models/user");
const Wishlist = require("../models/wishlist");
//const CatComment = require("../models/comment");

const addCommentForCat = async (req, res, next) => {
  try {
    let result;
    const paramCatId = req.params.id;
    let { userId, catId, userName, comment } = req.body;

    const user = await User.findById({ _id: userId });
    const cat = await Cat.findById(paramCatId);

    console.log(user);
    console.log(cat);
    if (!user) {
      return res.status(406).json({
        data: userId,
        message: "User not found",
      });
    }

    if (!cat) {
      return res.status(406).json({
        data: catId,
        message: "Cat not found",
      });
    } else {
      cat.comment.push({
        userId,
        catId,
        userName,
        comment,
      });
      result = await cat.save();
    }

    // if (result != null) {
    //   const comment = await CatComment.create({ userId, catId, userName, comment });
    //}
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", err: error });
    next();
  }
};

module.exports = { addCommentForCat };
