const express = require('express');
const {verifyToken} = require('../controller/middleWare')
const {createChat,sendMessage} = require('../controller/chatController')

const router = express.Router();

router.get('/createChat/:user1/:user2',verifyToken,createChat);
router.get('/sendMessage/:user1/:user2/:message',verifyToken,sendMessage);

module.exports = router