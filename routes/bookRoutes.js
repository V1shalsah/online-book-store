const express = require("express");
const router = express.Router();
const Book = require("../models/Book");


// get all books
router.get("/", async (req, res) => {

  const books = await Book.find();
  res.json(books);

});


// search books
router.get("/search/:key", async (req, res) => {

  const books = await Book.find({
    $or: [
      { title: { $regex: req.params.key, $options: "i" } },
      { author: { $regex: req.params.key, $options: "i" } },
      { category: { $regex: req.params.key, $options: "i" } }
    ]
  });

  res.json(books);

});


module.exports = router;