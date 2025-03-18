const express = require('express');
const {signUp,login,getUser,logout,listUsers} = require("../controller/userController")
const {verifyToken} = require('../controller/middleWare')

const router = express.Router();
router.post('/signup',signUp)
router.post('/login',login)
router.get('/getUser',verifyToken,getUser)
router.get('/listUser',verifyToken,listUsers)
router.get("/logout",logout)
module.exports = router;