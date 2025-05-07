const express = require('express');
const usermodel = require('../models/user');
const dashboard = express.Router();

dashboard.get('/dashboard/:id',async (req,res)=>{
    const user = await usermodel.findOne({ _id:req.params.id }).populate('post');
    console.log(user);
    res.render('Dashboard',{user});
});

module.exports = dashboard;