import CommentService from 'services/comment-service';

const addCustomValidation = (input) => {
    if (input.value === input.value.toUpperCase()) {
        input.setCustomValidity('No introduzcas todo el texto en mayúsculas');
    } else {
        input.setCustomValidity('');
    }
}

const addErrorClass = (input) => {
    if (!input.checkValidity()) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
}

const handleValidation = (formInputs) => {
    for (let i = 0; i < formInputs.length; i += 1) {
        const input = formInputs[i];

        input.addEventListener('focus', () => {
            input.classList.add('focus');
        });

        input.addEventListener('blur', () => {
            input.classList.remove('focus');
            addCustomValidation(input);
            addErrorClass(input);
        });
    }
}

export const updateCommentsForm = () => {
    const commentsForm = document.getElementById('comments-form');
    const submitFormButton = document.getElementById('comments-form-submit');
    const formInputs = commentsForm.getElementsByClassName('comments-input');
    const notice = document.getElementById('notice');

    handleValidation (formInputs);
}