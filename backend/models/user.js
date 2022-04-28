const mongoose = require("mongoose");

const userSchema  = mongoose.Schema({
    username :{
        type : String,
        require : true,
        unique : true
        
    },
    password :{
        type : String,
        require : true,
        unique : true
        
    },
    firstName :{
        type : String,
        require : true
    },
     lastName :{
        type : String,
        require : true
    },
    email :{
        type : String,
        require : true,
        unique : true
    },
    contactNumber :{
        type : String,
        require : true
    },
    gender :{
        type : String,
        require : true
    },
    birthday :{
        type : Date,
        require : true,
        get: v => new Date(v),
        set: v => new Date(v),
    },
    profession: [String],
},{collection : "users"});

const User = mongoose.model('User', userSchema);

module.exports = User;