const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
        User:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        Date:{
            type:Date,
            default:Date.now
        },
        Title:String,
        Bio:String,
        PostImage:String,
        Likes:
        [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"user"
            }
        ]

    });
const postmodel = mongoose.model('post',postSchema);
module.exports = postmodel;