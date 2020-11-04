const express = require('express');

const LikeController = require('./controllers/LikeController');
const TweetController = require('./controllers/TweetController');
const ComentController = require('./controllers/ComentController');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ OK: true });
});

//Tweets
routes.get('/tweets', TweetController.listTweet);
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