import noAvatar from 'assets/noavatar.jpg';

export const updateArticleDetail = ({
  title, author, media, text_article, data_pub, comments, id
} = { title: 'No title', author: { user_name: 'No author', user_image: 'No Image' } }) => {
  const article = document.getElementById('article-detail');
  
  console.log(noAvatar);
  const avatar = author.user_image !== 'No Image' ? author.user_image : noAvatar;
  const cover = media.type === 'image'
    ? `<img src="${media.url}" class="article-image" ></img>`
    : `<div class="video-container">${media.url}</div>`
  
  article.innerHTML = `
        <div class="like-container">
            <i class="far fa-heart fa-2x"></i>
        </div>
        <div class="article-header">
            <div class="title-container">    
                <h1>${title}</h1>
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
};

export default {
  updateArticleDetail
}
