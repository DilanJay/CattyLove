const mongoose = require("mongoose");
const Cat = require("./cat");
const wishListSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    catId: [{ type: String }],
    addedOn: {
      type: Date,
      get: () => new Date(Date.now),
      set: () => new Date(Date.now),
    },
  },
  { collection: "wishlist" }
);

const Wishlist = mongoose.model("Wishlist", wishListSchema);

module.exports = Wishlist;
