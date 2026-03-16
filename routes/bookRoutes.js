const router = require("express").Router();
const Book = require("../models/Book");

router.post("/",async(req,res)=>{
const newBook = new Book(req.body);

try{
const savedBook = await newBook.save();
res.json(savedBook);
}catch(err){
res.status(500).json(err);
}
});

router.get("/",async(req,res)=>{
try{
const books = await Book.find();
res.json(books);
}catch(err){
res.status(500).json(err);
}
});

module.exports = router;