const express = require("express");
const router = express.Router();
const Wishlist = require("../models/Wishlist");


// Add book to wishlist
router.post("/add", async (req, res) => {
  const item = new Wishlist(req.body);
  await item.save();
  res.json({ message: "Book added to wishlist" });
});


// Get wishlist by user
router.get("/:userId", async (req, res) => {
  const items = await Wishlist.find({ userId: req.params.userId });
  res.json(items);
});


// Remove from wishlist
router.delete("/:id", async (req, res) => {
  await Wishlist.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed from wishlist" });
});

module.exports = router;