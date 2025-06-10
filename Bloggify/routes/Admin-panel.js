const express = require('express');
const panel = express.Router();

panel.get('/panel',(req,res)=>{
    
     
    res.render('admin-panel');
});
module.exports = panel;