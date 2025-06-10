const mongoose = require('mongoose');

const blogschema = mongoose.Schema({
    Title:String,
    Description:String,
    ImageName:String,
    Date:
    {
        type:Date,
        default:Date.now
    }
});


const blogmodel = mongoose.model('blog',blogschema);
module.exports = blogmodel;