import Api from './Api';

export default {
    
    async showComents(idTweet) {
        return await Api.get(`/coments/${idTweet}`);
    },

    async createComent(idTweet, content, author, thumbnail) {
        await Api.post(`/coments/${idTweet}`, { content, author, thumbnail });
    },

    async removeComent(idTweet) {
        await Api.delete(`/coments/${idTweet}`);
    }

}
