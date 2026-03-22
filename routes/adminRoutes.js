const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const upload = require("../middleware/upload");

// add book
router.post("/add-book", upload.single("image"), async (req, res) => {

  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    price: req.body.price,
    image: req.file.filename
  });

  await book.save();

  res.json({ message: "Book added successfully" });
});


// delete book
router.delete("/delete-book/:id", async (req, res) => {

  await Book.findByIdAndDelete(req.params.id);

  res.json({ message: "Book deleted" });
});


module.exports = router;