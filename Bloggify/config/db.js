const mongoose = require('mongoose');
const connection = mongoose.connect(`${process.env.MONGODBURL}`).then(()=>{
    console.log('Database Connected');
}).catch(()=>{
    console.log('Database Error');
})
module.exports = connection;