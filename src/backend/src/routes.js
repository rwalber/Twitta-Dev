const express = require('express');

const LikeController = require('./controllers/LikeController');
const TweetController = require('./controllers/TweetController');
const ComentController = require('./controllers/ComentController');
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ OK: true });
});

// Login
routes.post('/login', LoginController.login);

// Users
routes.post('/register', UserController.create);

//Tweets
routes.get('/tweets', TweetController.showTweets);
routes.post('/tweets', TweetController.createTweet);
routes.delete('/tweets/:id', TweetController.removeTweet);

// Coments
routes.get('/coments/:id', ComentController.listComents);
routes.post('/coments/:id', ComentController.createComent);
routes.delete('/coments/:idTweet/:idComent', ComentController.removeComent);

// Likes
routes.post('/likes/:id', LikeController.createLike);
routes.delete('/likes/:id', LikeController.removeLike);

module.exports = routes;