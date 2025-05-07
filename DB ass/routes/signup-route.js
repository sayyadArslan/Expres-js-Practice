const express = require('express');
const Signup =  express.Router();
const signupcontrol =  require('../controllers/signup-controller');
const multer = require('multer');
const storage  = require('../utils/storage');


/*const filefilter = (req,file,cb) =>
{
    if(file.mimetype == 'image/')
    {
        cb(null,true);// true means upload image
    }
    else
    {
        cb(new Error('Only image allowed'),false);
    }
}*/

const upload = multer({
    storage:storage,
    limits:
    {
        fileSize: 1024 * 1024 * 3,
    }
    //fileFilter:filefilter,
});





Signup.get('/signup',(req,res)=>{
    res.render('SignUp');
});
Signup.post('/register',upload.single('file'),signupcontrol);
module.exports = Signup;