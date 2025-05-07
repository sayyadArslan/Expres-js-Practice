const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const  app = express();
const connection = require('./config/db');
const cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');
app.use(express.static(path.join(__dirname,'public')));

/*=============Middlewares======================*/ 
app.set('view engine','ejs'); 
app.use(express.urlencoded());
app.use(express.json());
app.use(cookie());
app.use(express.static('users')); 
app.use(express.static('posts'));  
/*app.use('/',(req,res,next)=>{
  
})
*/


 
/*Routes */
    const SignIn    =  require('./routes/signin-route');
    const SignUp = require('./routes/signup-route');
    const logout = require('./routes/logout-route');
    const dashboard = require('./routes/dashboard-route');
    const checkuser =  require('./middlewares/check-user');
    const newpost = require('./routes/Newpost');
/*================ */

app.use(SignUp);
app.use(SignIn);
app.use(logout);
app.use(dashboard);
app.use(newpost);


app.get('/',checkuser,(req,res)=>{
    
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is Listening at PORT:${process.env.PORT}`);
});