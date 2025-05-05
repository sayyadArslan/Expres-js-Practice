const express = require('express');
const app = express();
const adduser  = require('./Routes/adduser');
const path = require('path');
const usermodel =  require('./model/user');
app.use(express.urlencoded());
app.use(express.json());
app.set('view engine','ejs');

const connection =  require('./Config/db');
app.use(express.static(path.join(__dirname,'./public')));
app.use((req,res,next)=>
{
    //console.log(req.method);
    console.log('I am First MiddleWare');
    next();
});

app.get('/',(req,res)=>{
    
    usermodel.find({
        username:'arslan'
    }).then((users)=>{
        res.render('Home',{users});
    });
});

app.use(adduser);

app.listen(3000,()=>{
    console.log(`Server is Listening at  Port 3000`);
});

/*A full  stack developer */
//----create
//----read
//----Update
//---delete