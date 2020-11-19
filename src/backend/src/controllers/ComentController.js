const Tweet = require('../models/Tweet');

module.exports = {

    async listComents(request, response) {
        const tweet = await Tweet.findById(request.params.id);

        return response.json(tweet.coments);
    },

    async createComent(request, response) {
        const tweet = await Tweet.findById(request.params.id);
        
        tweet.coments.push(request.body);

        await tweet.save();

        request.io.emit('NewComent', tweet)

        return response.json(tweet);
    },

    async removeComent(request, response) {
        const tweet = await Tweet.findById(request.params.idTweet);

        tweet.coments.pull( { _id: request.params.idComent } );

        await tweet.save();

        return response.json(tweet);
    }
};