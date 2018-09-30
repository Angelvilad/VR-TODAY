import { appendComponent } from 'utils/utils';
import { createArticle } from 'components/article/article-component';
import ArticleService from 'services/article-service';


const loadArticles = (articlesJson, articles) => {
    const updatedArticles = articles;
    if(articlesJson.length === 0) {
        updatedSongs.innerHTML = 'No articles';
    } else {
        appendComponent(updatedArticles,
            articlesJson.map(articleData => createArticle(articleData)));
    }
};

export const updateArticles = () => {
    const articlesServiceInstance =  new ArticleService();
    const articles = document.getElementById('articles');
    articles.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    articlesServiceInstance.getArticles().then((articlesJson) => {
        articles.innerHTML = '';
        loadArticles(articlesJson, articles);
    }).catch((err) => {
        articles.innerHTML = 'There was an error, please reload';
    })

}

export const createArticles = () => {
    const articles = document.getElementById('articles');
    updateArticles();

    return articles;
};

export default {
    createArticles
}