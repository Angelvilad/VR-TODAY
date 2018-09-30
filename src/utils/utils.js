export const appendComponent = (parent, components) =>{
    components.forEach((component) => {
        parent.appendChild(component);
    });
}

export default {
    appendComponent
}