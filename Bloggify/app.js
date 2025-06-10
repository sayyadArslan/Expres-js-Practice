const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const path = require('path');
const connection = require('./config/db');

//================MiddleWare=================*/

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.use(express.static('blogs'));

//******************User Routes********************/
const SignUp = require('./routes/SignUp');
const login = require('./routes/login');
const Newblog = require('./routes/Newblog');
const panel =  require('./routes/Admin-panel');
const logout = require('./routes/logout');
const blogmodel = require('./models/blog');
const Detail = require('./routes/BlogDetail');


app.get('/',async(req,res)=>{
    const blog = await blogmodel.find({});
    console.log(blog);
    res.render('Home',{blog});
});

app.use(SignUp);
app.use(login);
app.use(Newblog);
app.use(panel);
app.use(logout);
app.use(Detail);


app.listen(process.env.PORT,()=>{
    console.log(`Server is Listening at PORT:${process.env.PORT}`);
})