const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const path =  require('path');
const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'arslan5sherazi@gmail.com',
        pass:'zvcwejlmemucjijw'
    },
    attachments:{
        filename:'data.pdf',
        path:path.join(__dirname,'files','data.pdf');
    }
})
//zvcw ejlm emuc jijw
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/submit',async(req,res)=>{
    const {name,email,subject,message} = req.body;
    console.log(req.body);
    try{
         const info = await transporter.sendMail({
        from:email,//Ye woh email hota hai jisse email bheji ja rahi hai.
        to:'arslan5sherazi@gmail.com',//Ye woh email address hota hai jisko email receive karni hai.
        subject:subject,
        text:`From ${name} And Message:${message}`
    });
    res.send(info);
    }
    catch(error)
    {   
        res.send(error)
    }
   

})


app.listen(3000,()=>{
    console.log('Server is Listening At Port:3000');
});