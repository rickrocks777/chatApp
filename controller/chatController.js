const chatModel = require('../models/chatModel')
const messageModel = require('../models/messageModel')

const createChat = async(req,res) => {
    try {
        const user = req.username;
        if(!user) {
            return res.json({error:"invalid token"})
        }
        const {user1,user2} = req.params;
        const members = [user1,user2];
        const membersExist = await chatModel.findOne({members:{$all:members}});
        if(membersExist) {
            const messages = await messageModel.find({chatId:membersExist._id},{_id:0,from:1,to:1,message:1});
            return res.json({success: messages});
        }
        const newChat = new chatModel({members});
        newChat.save();
        return res.json({success:members})
    } catch (err) {
        return res.json({error:"something went wrong"});
    }
}

const sendMessage = async(req,res) => {
    try {
        const user = req.username;
        if(!user) {
            return res.json({error:"invalid token"});
        }
        const {user1,user2,message} = req.params
        const membersExists = await chatModel.findOne({members:{$all:[user1,user2]}})
        if (membersExists) {
            const newMessage = new messageModel({
                chatId: membersExists._id,
                from : user1,
                to: user2,
                message
            })
            newMessage.save();
            return res.json({success:newMessage})
        }
        return res.json({error:"chatId does not exist"});
    } catch (err) {
        return res.json({error:"something went wrong"})
    }
}

module.exports = {createChat,sendMessage};