import { updateHeader } from 'components/header/header-component';
import { updateCommentsForm} from 'components/comments-form/comments-form-component.js';
import { updateArticleDetail } from 'components/article-detail/article-detail-component';
import { updateComments } from 'components/comments/comments-component';
import ArticleService from 'services/article-service';
import queryString from 'query-string';
import pubSub from 'pubsub-js';
import 'styles/main.scss';

const articleServiceInstance = new ArticleService();
const query = queryString.parse(window.location.search)
const articleId = query && query.id;

updateHeader({ title: 'VR Today!!' });

if (articleId) {
    articleServiceInstance.getArticle(articleId).then((articleJSON) => {
        updateArticleDetail(articleJSON);
        updateCommentsForm(articleId);
        updateComments(articleId);

        pubSub.subscribe('reload', () => {
        updateComments(articleId);
        });
    });
}

  