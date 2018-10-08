const calculeTime = (regTime) => {
    const now = new Date();
    const commentTime = new Date(regTime);
    const interval = now - commentTime;
    
    const minutes = parseInt(interval / 1000 / 60);
    const hours = parseInt(minutes / 60);
    const days = parseInt(hours / 24);

    if (minutes < 59 ) {
        return `Publicado hace ${minutes} minutos `;
    } else if (hours < 24) {
        return `Publicado hace ${hours} horas`;
    }
    return `Publicado hace ${days} dias`;
}

export const createComment = ({
    name, last_name, email, message,regTime }) => {
    const comment = document.createElement('div');
    comment.classList.add('comment');
    const time = calculeTime(regTime);

    comment.innerHTML = `
        <div class="user-data">
            <time>${time}</time>
            <p>Name: ${name}</p>
            <p>Last Name: ${last_name}</p>
            <p>Email: ${email}</p>
        </div>
        <div class="comment-text">
            <p>${message}</p>
        </div>
    `;
    return comment;
};

export default createComment;