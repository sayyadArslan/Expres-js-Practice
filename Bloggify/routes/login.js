const express = require('express');
const login = express.Router();
const usermodel = require('../models/user');
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const blogmodel = require('../models/blog');


login.get('/np-admin',(req,res)=>{
    res.render('Login');
});

login.post('/submit',async(req,res)=>{
   

    //console.log(req.body);
    const {email,password} = req.body;
    const user = await usermodel.findOne({Email:email});
    //console.log(user);
    
    if(!user)
    {
        res.send('Something went Wrong');
    }
    bcrypt.compare(req.body.password,user.Password,async(err,result)=>{
       
        if(result)
        {
            let token = jwt.sign({email},process.env.SECRET);
            res.cookie('token',token);
            const blog = await blogmodel.find({});
            res.render('admin-panel',{blog});
        }
        else
        {   
            res.send('Something Went Wrong');
        }
    });



  /*  const user = await usermodel.findOne({Email:email});
    console.log(user);*/
});

module.exports = login;