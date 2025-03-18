const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const userModel = require("../models/userModel")
require("dotenv").config()

const signUp = async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password) {
        return res.json({error: "all fields required"})
    }
    const userExists = await userModel.findOne({username})
    if(userExists) {
        return res.json({error:"user already exists"})
    }
    const hashedPass = await bcrypt.hash(password,10);
    const newUser = new userModel({username,email,password:hashedPass});
    await newUser.save();
    const token = jwt.sign({username,email},process.env.JWT_SECRET)
    res.cookie("token",token)
    return res.json({username,email,token});
}

const login = async(req,res) =>{
    try {
        const {username,password} = req.body;
        if(!username || !password) {
            return res.json({error:"all fields required"});
        }
        const userExists = await userModel.findOne({username})
        if(!userExists) {
            return res.json({error:"invalid username"});
        }
        const isPasswordValid = await bcrypt.compare(password,userExists.password)
        if(!isPasswordValid) {
            return res.json({error:"invalid password"})
        }
        const token = jwt.sign({username},process.env.JWT_SECRET);
        res.cookie("token",token);
        return res.json({username,token});
    } catch(err) {
        return res.json({error:err});
    }
}

const getUser = (req,res) => {
    const user = req.username;
    return res.json({success:user});
}

const logout = (req,res)=>{
    res.clearCookie("token");
    res.json("logout successful");
}

const listUsers = async(req,res)=>{
    const user = req.username;
    if (!user) {
        return res.json({error: "invalid token"})
    }
    try {
        const users = await userModel.find({},{username:1});
        return res.json(users);
    } catch (error) {
        return res.json({error});
    }
}

module.exports = {signUp,login,getUser,logout,listUsers}