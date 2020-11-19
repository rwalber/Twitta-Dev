const Tweet = require('../models/Tweet');

module.exports = {
    
    async showTweets(request, response) {
        const tweets = await Tweet.find({}).sort("-createdAt");
        return response.json(tweets);
    },

    async createTweet(request, response) {

        const tweet = await Tweet.create(request.body);
        
        request.io.emit('Tweet', tweet);
        
        return response.json(tweet);
    },

    async removeTweet(request, response) {
        const tweet = await Tweet.findByIdAndRemove(request.params.id);
        
        return response.json(tweet);
    }

};