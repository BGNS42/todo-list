export function showTodo(todo) {
    const lista = document.querySelector(".lista");

    const todoCard = document.createElement("div");
    todoCard.classList.add(`todoCard`);
    
    const todoName = document.createElement("li");
    todoName.classList.add(`todoName`);
    console.log(todo.getTitle())
    todoName.innerText = `Todo: ${todo.getTitle()}`

    lista.appendChild(todoCard);
    todoCard.appendChild(todoName);
}