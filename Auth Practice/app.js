const express  = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const connection = require('./config/db');
const Signup = require('./routes/signup');
const login = require('./routes/login');


//********Middlewares************** */

app.set('view engine','ejs');
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

app.use('/',(req,res,next)=>{
    console.log(req.method);
    next();
})
//********Routes************** */
app.get('/',(req,res)=>{
    res.render('Home');
});
app.get('/logout',(req,res)=>{
    res.cookie("token","");
    res.redirect('/');
});
app.use(Signup);
app.use(login);

app.use((req,res)=>{
    res.status(404).send('Page Not Found');
})
app.listen(process.env.PORT,()=>{
    console.log(`Port is Listening at Port:${process.env.PORT}`);
});