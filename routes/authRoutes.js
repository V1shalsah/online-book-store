const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register",async(req,res)=>{
try{

const hashedPassword = await bcrypt.hash(req.body.password,10);

const user = new User({
name:req.body.name,
email:req.body.email,
password:hashedPassword
});

await user.save();

res.json("User Registered");

}catch(err){
res.status(500).json(err);
}
});

router.post("/login",async(req,res)=>{
try{

const user = await User.findOne({email:req.body.email});
if(!user) return res.status(404).json("User not found");

const valid = await bcrypt.compare(req.body.password,user.password);
if(!valid) return res.status(401).json("Wrong password");

const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},"secretkey");

res.json({token,user});

}catch(err){
res.status(500).json(err);
}
});

module.exports = router;