const express = require('express');
const path = require('path');

const { title } = require('process');
const expressrouter = express.Router();
expressrouter.get('/add-home',(req,res)=>{
    //res.sendFile(path.join(__dirname,'../','views','host.html'));
    res.render('host',{title:'Arslan Sherazi'});
});
expressrouter.post('/add-home',(req,res,next)=>
{
        console.log(req.body);
        res.render('Submit');
});
module.exports = expressrouter;