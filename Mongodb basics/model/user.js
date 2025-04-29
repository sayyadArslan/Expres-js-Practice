const mongoose =  require('mongoose');

const userschema =  new mongoose.Schema({
    username:String,
    Email:String,
    Password:Number
});
const usermodel =  mongoose.model('user',userschema);

module.exports =  usermodel;