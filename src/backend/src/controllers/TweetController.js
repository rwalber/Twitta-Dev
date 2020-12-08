const Tweet = require('../models/Tweet');

module.exports = {
    
    async showTweets(request, response) {
        const tweets = await Tweet.find({}).sort("-createdAt");
        return response.json(tweets);
    },

    async createTweet(request, response) {
        const tweet = await Tweet.create(request.body);
        request.io.emit('Tweet', tweet);
        
        // let tweetDataReturn = {
        //     likes: tweet.likes,
        //     _id: tweet._id,
        //     author: tweet.author,
        //     content: tweet.content,
        //     coments: tweet.coments,
        //     createdAt: tweet.createdAt,
        //     __v: tweet.__v,
        //     thumbnail: request.body.thumbnail
        // }

        return response.json(tweet);
    },

    async removeTweet(request, response) {
        const tweet = await Tweet.findByIdAndRemove(request.params.id);
        
        return response.json(tweet);
    }

};