export const createArticle = ({
    title, author, mediaUrl, description, data_pub, comments, id
} = { title: 'No title', author: {user_name: 'No author', user_image: 'No Image'}}) => {
    const article = document.createElement('div');
    article.classList.add('article');
    article.innerHTML = `
        <a class="article-title" href="/article/?id=${id}">
        <img src="${mediaUrl}" class="article-image" ></img>
        </a>
        <div>
        <a class="article-title" href="/article/?id=${id}">${title}</a>
        </div>
        <p class="article-author">${author.user_name}</p>
    `;
    return article;
};

export default {
    createArticle
}