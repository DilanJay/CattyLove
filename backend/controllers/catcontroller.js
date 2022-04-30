const Cat = require("../models/cat");
const User = require("../models/user");

//GET
const getCats = async (req, res, next) => {
  try {
    const cats = await Cat.find({});
    res.status(200).json(cats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// GET ID
const getCatById = async (req, res, next) => {
  try {
    const cat = await Cat.findById(req.params.id);

    res.status(200).json({ status: "OK", data: cat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", error: error });
  }
};
const addCat = async (req, res, next) => {
  try {
    let requestBody = req.body;

    if (requestBody != null) {
      const cat = await Cat.create({ ...requestBody });
      console.log(req);
      res.status(200).json(requestBody);
    } else {
      res.status(406).json({
        data: requestBody,
        message: "please fill all requires fields",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", err: error });
    next();
  }
};

// TODO dislike - unit test
const updateLikes = async (req, res, next) => {
  try {
    const cat = await Cat.findById(req.params.id);
    const { likeCount, userId, catId } = req.body;
    console.log("cat", cat);
    console.log("req.body", req.body);
    let likes = likeCount;

    if (!cat) {
      return res.json({
        status: "error",
        error: "No cat found for the given id",
      });
    }

    // if (!user) {
    //   return res.json({
    //     status: "error",
    //     error: "No user found for the given id",
    //   });
    // }

    let isLikedUserExsistForTheCat = await Cat.exists({
      "likes.userId": userId,
    });

    if (isLikedUserExsistForTheCat != null) {
      likes--;
      await Cat.updateOne(
        { _id: catId },
        { $inc: { likeCount: -1 }, $pull: { likes: { userId: userId } } },
        {
          upsert: false,
          multi: true,
        }
      );
    } else {
      cat.likeCount++;
      cat.likes.push({
        userId,
        catId,
      });
      await cat.save();
    }

    res.status(200).json({ status: "OK", data: isLikedUserExsistForTheCat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error });
  }
};

module.exports = {
  addCat,
  updateLikes,
  getCats,
  getCatById,
};
