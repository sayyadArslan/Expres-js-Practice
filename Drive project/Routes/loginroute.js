const express =  require('express');
const loginroute = express.Router();
const { body,validationResult } =  require('express-validator');
const usermodel = require('../models/usermodel');
const bcrypt  = require('bcrypt');

const jwt = require('jsonwebtoken');
loginroute.get('/Login',
    (req,res)=>{
    res.render('Login');
});

loginroute.post('/Login',
    body('username').trim().isLength({min:13}),
    body('Password').trim().isLength({min:5}),
    async (req,res)=>{


        const errors = validationResult(req);
        /*if(!errors.isEmpty())
        {
            return res.status(400).json({
                errors :errors.array(),
                message:'Invalid Data'
            });
        }*/

    console.log(req.body);
    const {username,Password} =  req.body;
    const user =  await usermodel.findOne({
        Username:username
    });
    if(!user)
    {
        return res.status(400).json({
            message:'Username or Password  Incorrect'
        });
    }
    //console.log(user.Password);

    const isMatch = await bcrypt.compare(Password,user.Password);
    console.log(isMatch);
    if(!isMatch)
    {
        return res.status(400).json({
            message:'Username or Password is Incorrect'
        });
    }
    
    const token = jwt.sign({
        userId:user._id,
        email:user.email,
        username:user.username
    },
    process.env.JWT_SECRET,);
   /* res.json({
        token
    });*/
    res.send('Login SuccessFull');
});

module.exports = loginroute;