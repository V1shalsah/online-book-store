const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  price: Number,
  description: String,
  image: String
});

module.exports = mongoose.model("Book", BookSchema);