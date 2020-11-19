import Api from './Api';

export default {
    
    async showComents(idTweet) {
        return await Api.get(`/coments/${idTweet}`);
    },

    async createComent(idTweet, content, author, thumbnail_url) {
        await Api.post(`/coments/${idTweet}`, { content, author, thumbnail_url });
    },

    async removeComent(idTweet) {
        await Api.delete(`/coments/${idTweet}`);
    }

}
