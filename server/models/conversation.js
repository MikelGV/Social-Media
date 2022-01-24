const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema({
    members : {
        type: Array,
    },
}, {timestamp: true})

module.exports = mongoose.model("Conversation", conversationSchema)