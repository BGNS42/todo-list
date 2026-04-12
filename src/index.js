import "./style/styles.css";
import "./style/pages.css";
import { Todo } from "./components/todos";
import { todoForm } from "./elements/todoForm";
import { createTodo } from "./app/controler";

// needed just for examples to show
import { addProject } from "./app/state";
import { showTodo } from "./components/todoCard";


const dglog = todoForm();
// document.body.appendChild(dglog); // todoForm() já controla isso

const addBtn = document.querySelector(".btn-add");

const form = dglog.querySelector("form");
const cancelBtn = dglog.querySelector("#cancel");

// Just a todo example to prevent the need to do the form all again
const exampleTodo = new Todo("Example Todo", "The Todo details should goes here", "26/03/2026", false, "Notes should be here like this.");
addProject(exampleTodo);
showTodo(exampleTodo);

const exampleTodo2 = new Todo("Example Todo 2", "The Todo details should goes here", "26/03/2026", false, "Notes should be here like this.");
addProject(exampleTodo2);
showTodo(exampleTodo2);


form.addEventListener("submit", () => {
    createTodo(dglog);
    form.reset();
});


addBtn.addEventListener("click", () => {
    dglog.showModal();
});

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dglog.close();
});

dglog.addEventListener("click", (event) => {
    if (event.target === dglog) {
      dglog.close();
    }
});

