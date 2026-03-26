const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Cart = require("../models/Cart");

// Checkout
router.post("/checkout/:userId", async (req, res) => {

  try {

    const cartItems = await Cart.find({ userId: req.params.userId });

    if (cartItems.length === 0) {
      return res.json({ message: "Cart is empty" });
    }

    let total = 0;

    cartItems.forEach(item => {
      total += item.price;
    });

    const order = new Order({
      userId: req.params.userId,
      items: cartItems,
      total: total,
      date: new Date()
    });

    await order.save();

    // clear cart
    await Cart.deleteMany({ userId: req.params.userId });

    res.json({
      message: "Order placed successfully",
      order: order
    });

  } catch (error) {
    res.status(500).json(error);
  }

});

module.exports = router;