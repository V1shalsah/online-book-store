const express = require("express");
const router = express.Router();

const Book = require("../models/Book");
const Order = require("../models/Order");
const User = require("../models/User");

// Admin Dashboard
router.get("/dashboard", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalBooks = await Book.countDocuments();
    const totalOrders = await Order.countDocuments();

    const orders = await Order.find();

    let revenue = 0;
    orders.forEach(order => {
      revenue += order.total;
    });

    res.json({
      users: totalUsers,
      books: totalBooks,
      orders: totalOrders,
      revenue: revenue
    });

  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;