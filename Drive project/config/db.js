const mongoose = require('mongoose');

function connection()
{
    mongoose.connect(process.env.MONGOURL).then(()=>{
        console.log('connect to database');
    });
}
module.exports =  connection;