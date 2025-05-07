const postmodel = require('../models/post');
const usermodel = require('../models/user');

async function newpost(req,res)
{
    const user = await usermodel.findOne({ _id:req.params.id });
    const{title,bio,} = req.body;

    const newpost = await postmodel.create({
        User:user._id,
        Title:title,
        Bio:bio,
        PostImage:req.file.filename
    })
    user.post.push(newpost._id);
    await user.save();
    res.redirect('/');
}
module.exports = newpost;