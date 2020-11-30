const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const fs = require('fs');
const tls = require('tls');

var privateKey = fs.readFileSync('privatekey.pem').toString();
var certificate = fs.readFileSync('certificate.pem').toString();

var credentials = tls.createSecureContext({ key: privateKey, cert: certificate });

const twittaDEV = express();

const parser = require('body-parser');
const urlencodedParser = parser.urlencoded({extended : false});

const server = require('http').Server(credentials, twittaDEV);
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

twittaDEV.use(parser.json());
twittaDEV.use(urlencodedParser)

twittaDEV.use('/files', express.static(path.resolve(__dirname, 'uploads')));
twittaDEV.use(express.json());
twittaDEV.use(routes);

server.listen(3333);