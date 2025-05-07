const usermodel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
async function SignIn(req,res)
{
    const{email,password} = req.body;
    //console.log(email,password);
    const user = await usermodel.findOne({Email:email});
    if(!user)
    {
        res.send('Something Went Wrong');
    }
    
        let result = bcrypt.compare(password,user.Password,(error,result)=>{
            if(result)
            {
                let token = jwt.sign({email},process.env.Secret);
                res.cookie('token',token);
                res.render('DB-post',{user});
            }
            else
            {
                res.send('Something Went Wrong')
            }
        });
    


    //res.send(user);
}
module.exports = SignIn;