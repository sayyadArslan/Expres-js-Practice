//const exp = require('constants');
const express = require('express');
const hostrouter = require('./routes/hostrouter');
const userrouter = require('./routes/userRouter');
const path = require('path');
const title = require('./utils/Title');
const app = express();
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');

app.use((req,res,next)=>
{
    console.log(req.url,req.method);
    next();
});

app.use(userrouter);
app.use(hostrouter);

app.use((req,res)=>{
    
    //res.status(404).sendFile('views/404.html',{root:__dirname});
    res.status(404).render('404',title);
});
app.listen(3000);