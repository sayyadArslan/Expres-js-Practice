const mongoose =  require('mongoose');

const userschema =  new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[3]
    },
    Email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[3]
    },
    Password:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[3]
    }

});
const usermodel   =  mongoose.model('user',userschema);
module.exports = usermodel;