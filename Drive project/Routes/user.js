const express =  require('express');
const user =  express.Router();
const { body,validationResult } =  require('express-validator');
const usermodel  = require('../models/usermodel');
const bcrypt  = require('bcrypt');

user.get('/user',(req,res)=>{
    res.render('user');
});
/*


*/
user.post('/user',
    body('email').trim().isEmail(),
    body('password').trim().isLength({min:5},),
    body('username').trim().isLength({min:4}),
    async (req,res)=>{
        const errors = validationResult(req);
        console.log(errors);
        console.log(req.body);
       
        const {username,email,Password} = req.body;
        const hashpassword = await bcrypt.hash(Password,10);
        const newuser = await usermodel.create({
           Username:username,
            Email:email,
            Password:hashpassword
        })
    res.json(newuser);
});
module.exports = user;