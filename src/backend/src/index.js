const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const fs = require('fs');

const credentials = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    requestCert: false,
    rejectUnauthorized: false
};

const twittaDEV = express();

const parser = require('body-parser');
const urlencodedParser = parser.urlencoded({limit: '200mb', extended: true});

const server = require('https').createServer(credentials, twittaDEV);
const io = require('socket.io')(server);

const url = "mongodb+srv://root:root@twittadev.58xby.mongodb.net/twittaDEV?retryWrites=true&w=majority";

mongoose.connect( url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

twittaDEV.use( (request, response, next) => {
    request.io = io;
    return next();
});

io.on('connect', function(socket){
    // console.log('Client connected: '+socket.id);
}, err => {
    console.log(err);
});

twittaDEV.use(cors());

twittaDEV.use(urlencodedParser)

twittaDEV.use(parser.text({ limit: '200mb' }));

twittaDEV.use(parser.json({ limit: '200mb' }));

twittaDEV.use(routes);

server.listen(3333);