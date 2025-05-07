const jwt = require('jsonwebtoken');
const usermodel = require('../models/user');
const postmodel = require('../models/post');

async function checkuser(req,res,next)
{
   // console.log('token:',req.cookies.token);
    if(req.cookies.token === undefined || req.cookies.token === "" )
    {
        res.render('Home');
    }
    else
    {
        let data = jwt.verify(req.cookies.token,process.env.Secret);
        const user = await usermodel.findOne({Email:data.email});
        const post = await postmodel.find({});
        res.render('DB-post',{ user,post}); 
    }
   /* else if(req.cookies.token === "")
        {
           
        }*/
            next();
}   
module.exports = checkuser;