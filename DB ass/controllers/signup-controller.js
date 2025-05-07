const usermodel =  require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

function Signup(req,res)
{
    console.log(req.file);
    const{username,email,password} = req.body;
    bcrypt.genSalt(10,(error,salt)=>{
        //console.log(salt);
         bcrypt.hash(password,salt,async(error,hash)=>{
                const NewUser = await usermodel.create({
                    Username:username,
                    Email:email,
                    Password:hash,
                    UserImage:req.file.filename
                });
                let token = jwt.sign({email},process.env.Secret);
                res.cookie('token',token);
                res.render('Dashboard',{user:NewUser});
            })
    })
    

}

module.exports = Signup;