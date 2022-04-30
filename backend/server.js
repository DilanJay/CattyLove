const express = require("express");
const connectDB = require("./config/db");
const catRoutes = require("./routes/catRoute");
const authRoutes = require("./routes/authRoute");
const wishlistRoutes = require("./routes/wishlistRoute");
const commentRoutes = require("./routes/commentRoute");
const errorHandler = require("./middlewares/error");
var cors = require("cors");
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

// create new cat - ok
// get all cat data
// get single cat data
// update like count - ok TODO Dislike feature
// delete cat
app.use("/api/cat", catRoutes);

// add comment
app.use("/api/commnet", commentRoutes);
// create new user
// read user
// update user
// delete user
app.use("/api/auth", authRoutes);

// create wishlist
// update wishlist
// get all from wishlist
// get one from wishlist
// delete wishlist
app.use("/api/wishlist", wishlistRoutes);

// Error Handler Middleware
// this must place in last because the next() can collect all the errors.
//app.use(errorHandler);

const PORT = process.env.PORT || 5200; // set the port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // log to console.

// if there are any unhandledRejection, then this function will log it and close the serever.
process.on("unhand  ledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
