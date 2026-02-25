
function todoForm() {
    const template = document.querySelector("#todo-form-template");

    const clone = document.importNode(template.content, true);

    const dglog = clone.querySelector("dialog");

    return dglog;
}

export { todoForm };