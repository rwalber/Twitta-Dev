const Tweet = require('../models/Tweet');

module.exports = {
    
    async createLike(request, response) {
        const tweet = await Tweet.findById(request.params.id);
        
        tweet.set( { likes: tweet.likes + 1 } );
        
        await tweet.save();

        request.socket.emit('Like', tweet);
        
        return response.json(tweet);
    },

    async removeLike(request, response) {
        const tweet = await Tweet.findById(request.params.id);
        
        tweet.set( { likes: tweet.likes - 1 } );
        
        await tweet.save();
        
        return response.json(tweet);
    },

};