// Create all to-do card elements from a to-do

import { removeFromProjects, logProjects } from "../app/state";
import { createButton } from "../elements/button";
import { openEditTodoForm } from "../app/controler";

function createTodoDetail(label, value, className) {
    const li = document.createElement("li");
    li.classList.add(className);
    li.innerText = `${label}: ${value}`;
    
    return li;
}

function setupEventListeners(card, todo, lista) {
    card.addEventListener("click", (e) => {
        const target = e.target;
        
        if (target.classList.contains("delBtn")) {
            lista.removeChild(card);
            removeFromProjects(todo);
        }
        
        if (target.classList.contains("completeBtn")) {
            todo.completed = true;
            console.log("Todo marcado como concluído");
            lista.removeChild(card);
            logProjects();
        }

        if (target.classList.contains("editBtn")) {
            const dialog = document.querySelector("dialog");
            if (dialog) {
                openEditTodoForm(todo, dialog);
            }
        }
    })
}

export function showTodo(todo) {
    const lista = document.querySelector(".lista");
    
    const todoCard = document.createElement("div");
    todoCard.classList.add("todoCard");
    todoCard.dataset.id = `${todo.id}`;
    
    const details = [
        createTodoDetail("Todo", todo.getTitle(), "todoName"),
        createTodoDetail("Description", todo.getDescription(), "todoDescription"),
        createTodoDetail("Date limit", todo.getDueDate(), "todoDueDate"),
        createTodoDetail("Priority", todo.getPriority(), "todoPriority"),
        createTodoDetail("Notes", todo.getNotes(), "todoNotes")
    ];
    
    details.forEach(detail => todoCard.appendChild(detail));
    
    const editBtn = createButton("Edit", "editBtn");
    const delBtn = createButton("Delete", "delBtn");
    const completeBtn = createButton("Done", "completeBtn");
    
    todoCard.append(editBtn, delBtn, completeBtn);

    setupEventListeners(todoCard, todo, lista);    
    lista.appendChild(todoCard);
}