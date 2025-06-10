const express = require('express');
const NewBlog = express.Router();
const blogmodel = require('../models/blog');
const multer = require('multer');
const path = require('path');



const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,`./blogs`);
    },
    filename:(req,file,cb)=>{
        const newfile = Date.now() + path.extname(file.originalname);
        cb(null,newfile);
    }
});
const upload = multer({
    storage:storage,
    limits:{
        fileSize:1024 * 1024 * 5
    }
});


NewBlog.get('/Addblog',(req,res)=>{
    res.render('Newblog');
})

NewBlog.post('/sub',upload.single('file'),async(req,res)=>{
    
    
   // console.log(req.body);
    console.log(req.file.filename);
    const {title,des} = req.body;
    const user = await blogmodel.create({
        Title:title,
        Description:des,
        ImageName:req.file.filename
    });
    
    res.render('admin-panel');
});

module.exports = NewBlog;