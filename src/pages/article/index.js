import { updateHeader } from 'components/header/header-component';
import { updateArticleDetail } from 'components/article-detail/article-detail-component';
import ArticleService from 'services/article-service';
import queryString from 'query-string';
import 'styles/main.scss';

const articleServiceInstance = new ArticleService();
const query = queryString.parse(window.location.search)
const articleId = query && query.id;

if (articleId) {
    articleServiceInstance.getArticle(articleId).then((articleJSON) => {
        updateArticleDetail(articleJSON);
    });
}

updateHeader({ title: 'VR Today!!' });