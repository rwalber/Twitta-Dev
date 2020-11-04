const Tweet = require('../models/Tweet');

module.exports = {
    
    async listTweet(request, response) {
        const tweets = await Tweet.find({}).sort("-createdAt");
        return response.json(tweets);
    },

    async createTweet(request, response) {
        const tweet = await Tweet.create(request.body);
        
        request.socket.emit('Tweet', tweet);
        
        return response.json(tweet);
    },

    async removeTweet(request, response) {
        const tweet = await Tweet.findByIdAndRemove(request.params.id);
        
        return response.json(tweet);
    }

};