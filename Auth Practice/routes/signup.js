const express  = require('express');
const signup = express.Router();
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const usermodel = require('../models/user');



signup.get('/signup',(req,res)=>{
    res.render('sign');
}); 

signup.post('/signup',(req,res)=>{
    //console.log(req.body);
    const {username,email,password} = req.body;

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,pass)=>{
            const user = await usermodel.create({
                Username:username,
                Email:email,
                Password:pass
            });
            let token = jwt.sign({email},process.env.SECRET);
            res.cookie("token",token);
            res.send(user);
        });

    });


    
});

module.exports = signup;