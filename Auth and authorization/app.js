const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');
const connection =  require('./config/db');
const usermodel =  require('./models/usermodel');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt =  require('jsonwebtoken');
// Built in Middleware
app.use(express.urlencoded());
app.use(express.json());
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());
// Routes
app.use('/',(req,res,next)=>{
    console.log('I am custom Middleware');
    console.log(req.method);    
    next();
})
app.get('/',(req,res)=>{
   res.render('Auth');
});
app.post('/Submit',(req,res)=>{
    //console.log(req.body);
    const {username,email,password} =  req.body; 
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async(err,hash)=>{
            let createduser =  await usermodel.create({
             Username:username,
             Email:email,
             Password:hash
    })
        let token = jwt.sign({email},"aaaaaaaaasj");
        res.cookie("token",token);
        res.send(createduser);
        });
    });
});

app.get('/logout',(req,res)=>{
    res.cookie('token',"");
    res.redirect('/');
})
app.get('/login',(req,res)=>{
    res.render('login');
});
app.post('/login',async (req,res)=>{
    let user = await usermodel.findOne({Email:req.body.email});
    console.log(user);
    if(!user) return res.send('something went Wrong');
   // else res.send('user found');
   bcrypt.compare(req.body.password,user.Password,(err,result)=>{
    console.log(result);
    if(result){
        let token = jwt.sign({email},"aaaaaaaaasj");
        res.cookie("token",token);
        res.send('Login Successful');
    } 
    else res.send('something wrong');
   });
})
app.listen(3000,()=>{
    console.log('Server is Listening at Port:3000');
})