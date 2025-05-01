const exp = require('constants');
const express = require('express');
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.set('view engine','ejs');

app.use((req,res,next)=>{
    console.log(req.method);
    console.log('this is a middleware');
    next();
})
app.get('/',(req,res,next)=>{
  // res.sendFile('views/index.html',{root:__dirname});
  res.render('index');
});
app.get('/add-home',(req,res)=>{
    //res.sendFile('views/Form.html',{root:__dirname});
    res.render('Form',{reg:req.body});
});
app.post('/add-home',(req,res)=>{
    console.log(req.body);
    res.send('data received');
});

app.listen(3000,()=>{
    console.log(`Server is listening at Port 3000`);
});