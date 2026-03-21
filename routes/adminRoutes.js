const router = require("express").Router();
const Book = require("../models/Book");

// Add book (admin)
router.post("/add-book", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.json({ message: "Book added successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete book
router.delete("/delete-book/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update book
router.put("/update-book/:id", async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Book updated" });
  } catch (err) {
    res.status(500).json(err);
  }
});


const Book = require("../models/Book");
const upload = require("../middleware/upload");

router.post("/add-book", upload.single("image"), async (req, res) => {

  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    price: req.body.price,
    image: req.file.filename
  });

  await book.save();

  res.json({ message: "Book added with image" });

});


module.exports = router;