const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    userId: String,
    bookId: String,
    title: String,
    price: Number,
    quantity:{
        type:Number,
        default:1
    }
});

module.exports = mongoose.model("Cart", CartSchema);