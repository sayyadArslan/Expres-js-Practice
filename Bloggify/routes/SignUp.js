const express = require('express');
const Sign  = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usermodel = require('../models/user');



Sign.get('/Signup',(req,res)=>{
    res.render('SignUp');
});
Sign.post('/panel',(req,res)=>{ 
   // console.log(req.body);
    const{ Username,Email,Password } = req.body;
    bcrypt.genSalt(10,(err,salt)=>{
       // console.log(salt);
       bcrypt.hash(Password,salt,async(err,pass)=>{
            const user = await usermodel.create({
                Username:Username,
                Email:Email,
                Password:pass
            });
            let token = jwt.sign({Email},process.env.SECRET);
            res.cookie('token',token);
            res.render('admin-panel');
       });

    })
    
});



module.exports = Sign;
