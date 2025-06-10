const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    Username:String,
    Email:String,
    Password:String
});
const usermodel = mongoose.model('user', UserSchema);
module.exports = usermodel;