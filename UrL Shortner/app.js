const express = require('express');
const app = express();
const path = require('path');
const connection = require('./config/db');

const urlmodel = require('./models/url-model');
const shortid = require('shortid');
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('Main')
});

app.post('/sub', async (req, res) => {

    const { url } = req.body;
    console.log(url);
    const shorturl = shortid();
    const newUrl = await urlmodel.create({
        originalUrl: url,
        shortUrl: shorturl
    });
    res.render('Main');
})





app.listen(3000, () => {
    console.log('Server is Listening at Port 3000 ');
})