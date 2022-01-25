const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    conversationId : {
        type: String,
    },
    sender: {
        type: String
    },
    text: {
        type: String
    }
}, {timestamp:true})

module.exports = mongoose.model("Message", messageSchema)