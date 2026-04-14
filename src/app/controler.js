// A controller that manage all to-do actions

import { Todo } from "../components/todos";
import { addProject, findProjectById, updateProject } from "./state";

function getFieldValue(formulario, selector) {
    return formulario.querySelector(selector).value;
}

function getCheckboxValue(formulario, selector) {
    return formulario.querySelector(selector).checked;
}

function resetFormState(formulario) {
    delete formulario.dataset.editing;
    const submitButton = formulario.querySelector("#addButton");
    if (submitButton) {
        submitButton.textContent = "Add";
    }
}

function createTodoFromForm(formulario) {
    const title = getFieldValue(formulario, "#todoTitle");
    const details = getFieldValue(formulario, "#todoDetails");
    const dueDate = getFieldValue(formulario, "#todoDueDate");
    const priority = getCheckboxValue(formulario, "#todoPriority");
    const notes = getFieldValue(formulario, "#todoNotes");

    const newTodo = new Todo(title, details, dueDate, priority, notes);
    addProject(newTodo);
    formulario.close?.();
    resetFormState(formulario);
    return newTodo;
}

function refreshTodoCard(todo) {
    const card = document.querySelector(`.todoCard[data-id="${todo.id}"]`);
    if (!card) return;

    card.querySelector(".todoName").innerText = `Todo: ${todo.getTitle()}`;
    card.querySelector(".todoDescription").innerText = `Description: ${todo.getDescription()}`;
    card.querySelector(".todoDueDate").innerText = `Date limit: ${todo.getDueDate()}`;
    card.querySelector(".todoPriority").innerText = `Priority: ${todo.getPriority()}`;
    card.querySelector(".todoNotes").innerText = `Notes: ${todo.getNotes()}`;
}

function updateTodoFromForm(formulario) {
    const todoId = formulario.dataset.editing;
    if (!todoId) return;

    const todo = findProjectById(todoId);
    if (!todo) return;

    todo.title = getFieldValue(formulario, "#todoTitle");
    todo.description = getFieldValue(formulario, "#todoDetails");
    todo.dueDate = getFieldValue(formulario, "#todoDueDate");
    todo.priority = getCheckboxValue(formulario, "#todoPriority");
    todo.notes = getFieldValue(formulario, "#todoNotes");

    updateProject(todo);
    refreshTodoCard(todo);
    formulario.close?.();
    resetFormState(formulario);
    return todo;
}

function openEditTodoForm(todo, dglog) {
    dglog.querySelector("#todoTitle").value = todo.getTitle();
    dglog.querySelector("#todoDetails").value = todo.getDescription();
    dglog.querySelector("#todoDueDate").value = todo.getDueDate();
    dglog.querySelector("#todoPriority").checked = todo.getPriority();
    dglog.querySelector("#todoNotes").value = todo.getNotes();

    dglog.dataset.editing = todo.id;
    const submitButton = dglog.querySelector("#addButton");
    if (submitButton) {
        submitButton.textContent = "Save";
    }

    dglog.showModal();
}

export { createTodoFromForm, updateTodoFromForm, resetFormState, openEditTodoForm }