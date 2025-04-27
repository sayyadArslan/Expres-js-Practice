const express = require('express');
const usermodel = require('../models/user');
const bcrypt = require('bcrypt');
const { body } = require('express-validator');
const login = express.Router();
const jwt = require('jsonwebtoken');

login.get('/login',(req,res)=>{
    res.render('login');
});

login.post('/login',async (req,res)=>{
    //console.log(req.body);
    const {email,password} = req.body;
    const user = await usermodel.findOne({Email:req.body.email});
    if(!user) res.send('Something Wrong');
     bcrypt.compare(req.body.password,user.Password,(err,result)=>{
        
        if(result)
        {
            let token = jwt.sign({email},process.env.SECRET);
            res.cookie('token',token);
            res.render('Home');
        }
        else
        {
            res.send('Something Wrong');
        }
    })

   // res.send(user);
});

module.exports = login;