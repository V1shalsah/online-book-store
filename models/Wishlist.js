const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  userId: String,
  bookId: String,
  title: String,
  author: String,
  price: Number,
  image: String
});

module.exports = mongoose.model("Wishlist", wishlistSchema);