const express = require('express');
const app =  express();
const path =  require('path');
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
const user = require('./Routes/user');
const dotenv = require('dotenv');
dotenv.config();
const connection  = require('./config/db');
connection();
const Login = require('./Routes/loginroute');
app.use(express.static(path.join(__dirname,'public')));


/*===================================*/ 
app.use('/',(req,res,next)=>{
    console.log(req.method);
    next();
})
app.get('/',(req,res)=>{
    res.render('Home');
});

app.use(user);
app.use(Login);
app.use((req,res)=>{
    res.status(404).send('page not Found:Error 404');
});
app.listen(3000,()=>{
    console.log('Server is Listening at Port 3000');
});