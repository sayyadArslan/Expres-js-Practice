const express =  require('express');
const   Newpost = express.Router();
const usermodel = require('../models/user');
const newpost = require('../controllers/Newpost-controller');
const storage = require('../utils/poststorage');
const multer = require('multer');


const upload = multer({
    storage:storage,
    limits:{
        fileSize:1024 * 1024 * 5
    }
})




Newpost.get('/newpost/:id',async (req,res)=>{
    
    const user = await usermodel.findOne({ _id:req.params.id })
   // console.log(user);
    res.render('NewPost',{user});
});





Newpost.post('/newpost/:id',upload.single('file'),newpost);
module.exports = Newpost;