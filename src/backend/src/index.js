const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const twittaDEV = express();

const server = require('http').Server(twittaDEV);

const socket = require('socket.io')(server);

const url = "mongodb+srv://root:root@twittadev.58xby.mongodb.net/twittaDEV?retryWrites=true&w=majority";

mongoose.connect( url, { useNewUrlParser: true });

twittaDEV.use( (request, response, next) => {
    request.socket = socket;
    return next();
});

twittaDEV.use(express.json());
twittaDEV.use(cors());
twittaDEV.use(routes);

server.listen(3000);