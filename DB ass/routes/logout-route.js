const express = require('express');

const logout = express.Router();

logout.get('/logout',(req,res)=>{
    res.cookie('token','');
    res.redirect('/');
});

module.exports = logout;