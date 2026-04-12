// A controller that manage all to-do actions

import { showTodo } from "../components/todoCard";
import { Todo } from "../components/todos";
import { addProject } from "./state";


function createTodo(formulario) {
    const resetaPriority = todoPriority.checked;

    const title = formulario.querySelector("#todoTitle").value;
    const details = formulario.querySelector("#todoDetails").value;
    const dueDate = formulario.querySelector("#todoDueDate").value;
    const notes = formulario.querySelector("#todoNotes").value;

    const newTodo = new Todo(title, details, dueDate, resetaPriority, notes);
    addProject(newTodo);
    showTodo(newTodo);
}

export { createTodo }