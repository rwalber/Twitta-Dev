import Api from './Api';

export default {
    
    async createLike(idTweet) {
        await Api.post(`/likes/${idTweet}`);
    },

    async removeLike(idTweet) {
        await Api.delete(`/likes/${idTweet}`);
    }

}
