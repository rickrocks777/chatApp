const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    members: {
        type: [String],
        require: true
    }
},{timestamps:true});

module.exports = mongoose.model("chats",chatSchema);