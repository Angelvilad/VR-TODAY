export const appendComponent = (parent, components) =>{
    components.forEach((component) => {
        parent.appendChild(component);
    });
}

/**
 * PolyFill reportValidity for IE
 */
export const reportValidity = (form) => {
    if (HTMLFormElement.prototype.reportValidity) {
        form.reportValidity();        
    } else {
        HTMLFormElement.prototype.reportValidity = () => {
            const btn = document.createElement('button');
            form.appendChild(btn);
            btn.click();
            form.removeChild(btn);
            return false;
        }
    }
};

export const getFormData = (formInputs, idArticle) => {
        const formData = {};
        for (let i = 0; i < formInputs.length; i += 1) {
            const input = formInputs[i];
            formData[input.name] = input.value;
        }
        formData.idArticle = idArticle;
        const now = new Date();
        formData.regTime = now.toString();
        return formData;
}

export default {
    appendComponent,
    reportValidity,
    getFormData
}