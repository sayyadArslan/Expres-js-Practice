const mongoose  =  require('mongoose');

const UserSchema = mongoose.Schema({
    Username:String,
    Email:String,
    Password:String,
    UserImage:String,
    post:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }]
});
const usermodel = mongoose.model('user',UserSchema);
module.exports = usermodel;