    import APIService from './API-service';

class CommentService {
    constructor() {
        this.baseUrl = process.env.API_URL;
        this.APIServiceInstance = new APIService();
        this.model = 'comments';
    }

    async postComment(comment) {
        return this.APIServiceInstance.post(comment, this.model);
    }

    async getComments(id) {
        return this.APIServiceInstance.get(`${this.model}/?idArticle=${id}`);
    }
}

export default CommentService;