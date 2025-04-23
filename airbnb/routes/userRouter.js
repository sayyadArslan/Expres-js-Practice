const express = require('express');
const user =  express.Router();
const path =  require('path');
const { registration } = require('./hostrouter');

user.get('/',(req,res)=>{
    console.log(registration);
    //res.sendFile(path.join(__dirname,'../','views','user.html'));
    res.render('user',{registration : registration });
});
module.exports = user;