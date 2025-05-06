const mongoose = require('mongoose');

const connection =  mongoose.connect(`${process.env.MONGOURL}`).then(()=>{
    console.log('DB is connected');
}).catch(()=>{
    console.log('DB is Created Problems.');
})
module.exports = connection;