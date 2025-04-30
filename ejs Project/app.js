const express  = require('express');
const path =  require('path');
const fs =  require('fs');
const app = express();
const PORT = 3000;
/*==========Middleware */
app.set('view engine','ejs');
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    fs.readdir('./Files',(err,result)=>{
       // console.log(result);
        res.render('Home',{files:result});
    })
    
});
app.get('/file/:filename',(req,res)=>{
    
   
    fs.readFile(`./Files/${req.params.filename}`,"utf-8",(err,result)=>{
        res.render('sho',{filename:req.params.filename,data:result});
    })
    
});

app.get(`/edit/:filename`,(req,res)=>{
    res.render('Edit',{filename:req.params.filename});
});
app.post('/update',(req,res)=>{
    fs.rename(`./Files/${req.body.previous}`,`./Files/${req.body.task}`,(err)=>{
        console.log(err);
        res.redirect('/');
    })
    
});
app.post('/create',(req,res)=>{
    
    fs.writeFile(`./Files/${req.body.title.split(' ').join('')}.txt`,req.body.task,()=>{
        res.redirect('/');
    })
})
app.listen(PORT,()=>{
    console.log(`Server is Listening at localhost://${PORT}`);
}) 