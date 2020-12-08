import Api from './Api';

export default {
    
    async show() {
        return await Api.get('tweets');
    },

    async create(content, author, thumbnail) {
        await Api.post('tweets', { content, author, thumbnail });
    },

    async remove(idTweet) {
        await Api.delete(`tweet/${idTweet}`);
    }
}