import noAvatar from 'assets/noavatar.jpg';

export const createArticle = ({
  title, author, media, text_article, data_pub, comments, id
} = { title: 'No title', author: { user_name: 'No author', user_image: 'No Image' } }) => {
  const article = document.createElement('div');
  article.classList.add('article');

  const avatar = author.user_image !== 'No Image' ? author.user_image : noAvatar;

  const cover = media.type === 'image'
    ? `<img src="${media.url}" class="article-image" ></img>`
    : `<div class="video-container">${media.url}</div>`

  article.innerHTML = `
        <div class="article-resume">
          <a class="article-cover" href="/article/?id=${id}">
            ${cover}
          </a>
          <div class="title-wrapper">
            <a class="article-title" href="/article/?id=${id}">${title}</a>
            <a href="/">
            <i class="fas fa-comments fa-2x"></i>
            </a>
          </div>
          <div class="description">
            <p class="article-text">${text_article}</p>
          </div>
        </div>
        <div class="article-author">
          <img src="${avatar}" class="avatar" ></img>    
          <p class="author-name">${author.user_name}</p>             
        </div>
    `;
  return article;
};

export default {
  createArticle
}
