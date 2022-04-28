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
  // GET ID
const getCatById = async (req, res, next) => {
    try {
      const cat = await Cat.findById(req.params.id);
  
      res.status(200).json(cat);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  const updateLikes = async (req, res, next) => {
    try {
      const cat = await Cat.findById(req.params.id);
      const { likeCount, userId, catId } = req.body;
  
      let likes = likeCount;
  
      if (!cat) {
        return res.status(406).json({
          data: catId,
          message: "not any cat found for this id",
        });
      }
  
      if (!user) {
        return res.status(406).json({
          data: userId,
          message: "not any user found for this id",
        });
      }
  
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
  
      res.status(200).json(isLikedUserExsistForTheCat);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  module.exports = {
    addCat,
    getCatById,
    getCats,
    updateLikes
  };