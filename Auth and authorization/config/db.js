const mongoose =  require('mongoose');

const connection = mongoose.connect('mongodb://0.0.0.0/user').then(()=>{
    console.log('db is connected');
});

module.exports =  connection;