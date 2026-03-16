const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
userId:String,
books:Array,
amount:Number,
status:{
type:String,
default:"pending"
}
},{timestamps:true});

module.exports = mongoose.model("Order",OrderSchema);