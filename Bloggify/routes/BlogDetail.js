const express = require('express');
const Detail = express.Router();
const blogmodel = require('../models/blog');
Detail.get('/detail/:id',async(req,res)=>{

    const blog = await blogmodel.findOne({_id:req.params.id});
    console.log(blog);
    res.render('BlogDetail',{blog});

});

module.exports = Detail;