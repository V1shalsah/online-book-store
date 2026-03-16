const router = require("express").Router();
const Order = require("../models/Order");

router.post("/",async(req,res)=>{

const order = new Order(req.body);

try{
const savedOrder = await order.save();
res.json(savedOrder);
}catch(err){
res.status(500).json(err);
}

});

router.get("/",async(req,res)=>{
try{
const orders = await Order.find();
res.json(orders);
}catch(err){
res.status(500).json(err);
}
});

module.exports = router;