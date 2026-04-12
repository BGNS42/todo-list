// Function that handle the creation of the To-do form at DOM

function todoForm() {
    const template = document.querySelector("#todo-form-template");

    const clone = document.importNode(template.content, true);

    const dglog = clone.querySelector("dialog");

    document.body.appendChild(dglog);
    return dglog;
}

export { todoForm };