const router = require("express").Router();
const Order = require("../models/Order");
const Cart = require("../models/Cart");


router.get("/:userId", async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
});

// checkout
router.post("/checkout/:userId", async(req,res)=>{

const cartItems = await Cart.find({userId:req.params.userId})

let total=0

cartItems.forEach(item=>{
total+=item.price
})

const order = new Order({
userId:req.params.userId,
items:cartItems,
total:total
})

await order.save()

await Cart.deleteMany({userId:req.params.userId})

res.json({message:"Order placed successfully"})

})


// view orders
router.get("/:userId", async(req,res)=>{

const orders = await Order.find({userId:req.params.userId})

res.json(orders)

})

module.exports = router;