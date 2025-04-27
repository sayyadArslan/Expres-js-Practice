const moongose = require('mongoose');

const userschema = moongose.Schema({
    Username:String,
    Email:String,
    Password:String
});
const usermodel  = moongose.model('user',userschema);

module.exports = usermodel;