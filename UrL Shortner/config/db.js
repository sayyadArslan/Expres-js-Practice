const mongoose = require('mongoose');


const connection = mongoose.connect('mongodb://0.0.0.0/url-short').then(()=>{
    console.log('Database Connected Successfully');
}).catch(()=>{
    console.log('Database Connection Failed');
});
module.exports = connection;