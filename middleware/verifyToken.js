const jwt = require("jsonwebtoken");

function verifyToken(req,res,next){

const token = req.headers.token;

if(!token){
return res.status(401).json("Access Denied");
}

try{
const verified = jwt.verify(token,"secretkey");
req.user = verified;
next();
}catch(err){
res.status(403).json("Invalid Token");
}

}

module.exports = verifyToken;