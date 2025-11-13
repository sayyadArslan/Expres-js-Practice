const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded());

// Middleware to Resolve Socket Cdn
app.use((req, res, next) => {
  res.setHeader( 
    "Content-Security-Policy",
    "default-src 'self'; connect-src 'self' http://localhost:4000;"
  );
  next();
});

const io = new Server(server);
io.on('connection',(client)=>{
    client.on("user-message",(message)=>{
            console.log('A new Message',message);
    })
    //console.log('A new User Connected',client.id);
})
app.get('/',(req,res)=>{ 
    res.sendFile('/public/index.html');
})
server.listen(4000,()=>{
    console.log('Server is Listening at Port:4000');
})