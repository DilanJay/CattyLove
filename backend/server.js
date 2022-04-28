const express = require("express");
const connectDB = require("./config/db");
const catRoutes = require("./routes/catRoute");
const wishlistRoutes = require("./routes/wishlistRoute");
const authRoutes = require("./routes/authRoute");
const commentRoutes = require("./routes/commentRoute");

var cors = require("cors");
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/cat", catRoutes);


// create new cat
// get all cat data
// get single cat data
// update like count
// delete cat


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
 

const PORT = process.env.PORT || 5201; // set the port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // log to console.

// if there are any unhandledRejection, then this function will log it and close the serever.
process.on("unhand  ledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
