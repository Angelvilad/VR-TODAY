import noAvatar from 'assets/noavatar.jpg';

const isLiked = id => localStorage.getItem(`article-${id}`);

const toggleLike = (id) => {
  const likeValue = isLiked(id) === 'true' ? 'false' : 'true';
  localStorage.setItem(`article-${id}`, likeValue);
};

const setInitialLikeValue = (likeButton, liked) => {
  if (liked === 'true') likeButton.children[0].classList.add('fas');
};

export const updateArticleDetail = ({
  title, author, media, text_article, introduction, data_pub, comments, id
} = { title: 'No title', author: { user_name: 'No author', user_image: 'No Image' } }) => {
  const article = document.getElementById('article-detail');
  
  const avatar = author.user_image !== 'No Image' ? author.user_image : noAvatar;
  const cover = media.type === 'image'
    ? `<img src="${media.url}" class="article-image" ></img>`
    : `<div class="video-container">${media.url}</div>`
  
  article.innerHTML = `
        <div class="like-container">
            <button id="like-button" class="like-button">
                <i class="far fa-heart fa-2x"></i>
            </button>
        </div>
        <div class="article-header">
            <div class="title-container">    
                <h1>${title}</h1>
                <h2>${introduction}</h2>
            </div>

            <div class="cover-container">
                ${cover}
            </div>
        </div>
        
        <div class="article-author">
            <img src="${avatar}" class="avatar" ></img>    
            <p class="author-name">${author.user_name}</p>             
        </div>
        <div class="text-container">
            <p class="article-text">${text_article}</p>
        </div>
        
    `;
    
    const likeButton = document.getElementById('like-button');

    setInitialLikeValue(likeButton, isLiked(id));
    
    likeButton.addEventListener('click', () => {
        likeButton.children[0].classList.toggle('fas');
        toggleLike(id);
    });
};

export default {
  updateArticleDetail
};
