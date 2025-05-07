const mongoose = require('mongoose');

const connection = mongoose.connect(`${process.env.MONGOURL}`).then(()=>{
    console.log('Database Connected');
}).catch(()=>{
    console.log('Database Not Connected');
});
module.exports = connection;