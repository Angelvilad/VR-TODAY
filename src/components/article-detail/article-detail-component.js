export const updateArticleDetail = ({
    title, author, mediaUrl, text_article, data_pub, comments, id
} = { title: 'No title', author: { user_name: 'No author', user_image: 'No Image' } }) => {
    const article = document.getElementById('article-detail');
    const textDiv = text_article ? (
        `<div class="article-text">
            <p>${text_article}</p>
        </div>`
    ) : '';
    const avatar = null;
    const image = null;
    article.innerHTML = `
    <div class="title-container">
        <h2 title="Article title" class="article-title">${title}</h2>
        <button id="like-button" class="like-button">
            <i class="far fa-heart"></i>
        </button>
    </div>
    <img src="${image}" class="song-image" ></img>
    <div class="author">
        <p title="Author name" class="article-author">${author.user_name}</p>
        <img src="${avatar}" class="avatar"></img>
    </div>
    ${textDiv}
    <div class="go-back">
        <a title="back" class="back" href='javascript:history.back()'><- Go Back</a>
    </div>
    
    `;
};
