const mongoose = require('mongoose');

//  Your code goes here
var scheme = new mongoose.Schema({
    name:{
        type: String,
        unique: false,
        required : true
    },
    location:{
        type: String,
        required: true
    },
    likes:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    PostImage:{
        type: String,
        required: false
    },
    date:{
        type: String,
        required : false
     } 
})

var userdata = mongoose.model("Instagram", scheme)

module.exports = userdata;