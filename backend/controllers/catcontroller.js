const Cat = require("../models/cat");

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

  module.exports = {
    addCat,
    getCatById,
  };