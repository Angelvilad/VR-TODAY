import createComment from 'components/comment/comment-component';
import CommentService from 'services/comment-service';
import { appendComponent } from 'utils/utils';

const loadComments = (commentsJson, comments) => {
        const updatedComments = comments;
        if (commentsJson.length === 0) {
            updatedComments.innerHTML = `
            <div class="comment">
                <p>Not comments yet</p>
            </div>
            `;
        } else {
            appendComponent(updatedComments,
                commentsJson.map(comment => createComment(comment)));
        }
}

export const updateComments = (id) => {
    const commentServiceInstance = new CommentService();
    const comments = document.getElementById('comments-list');
    comments.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    commentServiceInstance.getComments(id).then((commentsJson) => {
        comments.innerHTML = '';
        loadComments(commentsJson, comments);
    }).catch((err) => {
        comments.innerHTML = 'There was an error, please reload';
        console.log(err);
    })

};

export default updateComments;