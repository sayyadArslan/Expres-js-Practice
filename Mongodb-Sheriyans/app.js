const express = require('express');
const app = express();
const  dotenv = require('dotenv');
dotenv.config();
const path = require('path');

const db = require('./config/db');
const usermodel = require('./models/user');


app.use('/',(req,res,next)=>{
    console.log(req.method);
    next();
});

app.set('view engine','ejs');
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/submit',async(req,res)=>{
    //console.log(req.body);
    const {username,email,Image} = req.body;
     let createduser = await usermodel.create({
        Username:username,
        Email:email,
        ImageUrl:Image
     })
     res.send(createduser);
});
app.get('/read',async(req,res)=>{
    const user  = await usermodel.find();
    
    res.render('read',{user});
});
app.get('/update/:id',async (req,res)=>{
    const user = await usermodel.findOne({_id:req.params.id});
    res.render('Update',{user});
})  

app.post('/edit/:id', async (req,res)=>{
    const {Username,Email,ImageUrl} = req.body;
    console.log(req.body);
    const user = await usermodel.findOneAndUpdate({_id:req.params.id},{Username,Email,ImageUrl},{new:true});
    res.send(user);
});

app.get('/Delete/:id',async(req,res)=>{
    const user = await usermodel.findOneAndDelete({_id:req.params.id});
    res.redirect('/read');
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is Listening at PORT:${process.env.PORT}`);
});