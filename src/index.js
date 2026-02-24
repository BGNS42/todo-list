import "./style/styles.css";
import "./style/pages.css";
import { addProject, logProjects } from "./app/state";
import { Todo } from "./components/todos";
import { refreshList } from "./components/refreshList";

const addBtn = document.querySelector(".btn-add");
const form = document.querySelector("form");
const dglog = document.querySelector("dialog");
const cancelBtn = document.querySelector("#cancel");


form.addEventListener("submit", () => {
    const resetaPriority = todoPriority.checked;
    const newTodo = new Todo(todoTitle.value, todoDetails.value, todoDueDate.value, resetaPriority);
    addProject(newTodo);
    logProjects();
    refreshList(newTodo);
});


addBtn.addEventListener("click", () => {
    form.reset();
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

