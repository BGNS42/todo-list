import "./style/styles.css";
import "./style/pages.css";
import { todoForm } from "./components/todoForm";
import { createTodoFromForm, updateTodoFromForm, resetFormState } from "./app/controler";

// needed just for examples to show
import { Todo } from "./components/todos";
import { addProject } from "./app/state";
import { showTodo } from "./components/todoCard";

const dglog = todoForm();

const addBtn = document.querySelector(".btn-add");
const form = dglog.querySelector("form");
const cancelBtn = dglog.querySelector("#cancel");

const exampleTodo = new Todo("Example Todo", "The Todo details should goes here", "20026-03-26", false, "Notes should be here like this.");
addProject(exampleTodo);
showTodo(exampleTodo);

const exampleTodo2 = new Todo("Example Todo 2", "The Todo details should goes here", "2026-03-12", false, "Notes should be here like this.");
addProject(exampleTodo2);
showTodo(exampleTodo2);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (dglog.dataset.editing) {
        updateTodoFromForm(dglog);
    } else {
        const newTodo = createTodoFromForm(dglog);
        if (newTodo) {
            showTodo(newTodo);
        }
    }

    form.reset();
    resetFormState(dglog);
});

addBtn.addEventListener("click", () => {
    dglog.showModal();
});

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form.reset();
    resetFormState(dglog);
    dglog.close();
});

dglog.addEventListener("click", (event) => {
    if (event.target === dglog) {
      form.reset();
      resetFormState(dglog);
      dglog.close();
    }
});

