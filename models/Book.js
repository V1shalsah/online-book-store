const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
title:String,
author:String,
price:Number,
description:String,
image:String
},{timestamps:true});

module.exports = mongoose.model("Book",BookSchema);