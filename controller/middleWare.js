const jwt = require('jsonwebtoken');
require("dotenv").config();

const verifyToken = (req,res,next) => {
    var token = req.header("Authorization");
    if(!token) {
        return res.json({error:"Access Denied"});
    }
    token = token.replace("Bearer ","");
    const isTokenValid = jwt.verify(token,process.env.JWT_SECRET);
    if(!isTokenValid) {
        return res.json({error:"invalid token"})
    }
    req.username = isTokenValid.username;
    next();
}

module.exports = {verifyToken}