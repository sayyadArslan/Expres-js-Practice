const mongoose =  require('mongoose');

const connection =  mongoose.connect('mongodb://0.0.0.0/user').then(() =>{
    console.log('connect to mongodb database');
}).catch((e)=>{
    console.log('db is not connected',e);
});
module.exports  =  connection;