import APIService from './API-service';

class CommentService {
    constructor() {
        this.baseUrl = process.env.API_URL;
        this.APIServiceInstance = new APIService();
        this.model = 'messages';
    }

    async postComment(comment) {
        return this.APIServiceInstance.post(comment, this.model);
    }
}

export default {
    CommentService
}