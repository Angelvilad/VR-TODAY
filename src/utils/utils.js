export const appendComponent = (parent, components) =>{
    components.forEach((component) => {
        parent.appendChild(component);
    });
}

/**
 * PolyFill reportValidity for IE
 * POR AQUI POLYFILL IE11, DIA 6 VIDE 1 MIN 45~(continua luego en comments-form-component)
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

export default {
    appendComponent
}