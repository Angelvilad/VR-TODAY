const updateTitle = (title) => {
    const titleElement = document.getElementById('title');
    titleElement.innerHTML = title;
};

const hamburguerIcon = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('nav-sections');

hamburguerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('nav-open');
    
});

export const updateHeader = ({ title }) => {
    updateTitle(title);
}

export default {
    updateHeader
};