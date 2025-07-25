const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    originalUrl: String,
    shortUrl: String
});
const urlmodel = mongoose.model('url',urlSchema);
module.exports = urlmodel;

