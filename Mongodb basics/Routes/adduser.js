const express = require('express');

const adduser =  express.Router();
const usermodel =  require('../model/user');
adduser.get('/add-user',(req,res)=>{ 
    res.render('adduser');
});

adduser.post('/add-user',async (req,res)=>{
    
    const { username,Email,Password } = req.body;
    await usermodel.create({
        username:username,
        Email:Email,
        Password:Password
    });
    
    res.send('data received');
});
module.exports =  adduser;