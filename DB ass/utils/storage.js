const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./users');
    },
    filename:(req,file,cb)=>{
        const newfile = Date.now() + path.extname(file.originalname);
        cb(null,newfile);
    }
});
module.exports = storage;
