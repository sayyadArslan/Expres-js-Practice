console.log('I am Practicing Express Js')
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(req.method);
  res.send('Hello World!')
});
app.get('/index', (req, res) => {
    res.sendFile('index.html',{root:__dirname});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})