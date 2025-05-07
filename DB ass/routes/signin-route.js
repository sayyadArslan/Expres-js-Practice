const express = require('express');
const SignIn = express.Router();
const signcontrol = require('../controllers/signin-controller');


SignIn.get('/signin',(req,res)=>{
    res.render('Signin');
});

SignIn.post('/submit',signcontrol);

module.exports = SignIn; 