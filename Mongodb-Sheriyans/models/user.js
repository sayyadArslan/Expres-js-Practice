const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Username:String,
    Email:String,
    ImageUrl:String
});
const model = mongoose.model('user',userSchema);
module.exports = model;