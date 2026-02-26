import "./style/styles.css";
import "./style/pages.css";
import { addProject } from "./app/state";
import { Todo } from "./components/todos";
import { showTodo } from "./components/todoCard";
import { todoForm } from "./elements/todoForm";


const dglog = todoForm();
document.body.appendChild(dglog);

const addBtn = document.querySelector(".btn-add");

const form = dglog.querySelector("form");
const cancelBtn = dglog.querySelector("#cancel");


form.addEventListener("submit", () => {
    const resetaPriority = todoPriority.checked;

    const title = dglog.querySelector("#todoTitle").value;
    const details = dglog.querySelector("#todoDetails").value;
    const dueDate = dglog.querySelector("#todoDueDate").value;
    const notes = dglog.querySelector("#todoNotes").value;

    const newTodo = new Todo(title, details, dueDate, resetaPriority, notes);
    addProject(newTodo);
    showTodo(newTodo);

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

