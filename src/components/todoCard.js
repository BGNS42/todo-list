// Create all to-do card elements from a to-do

import { removeFromProjects, logProjects } from "../app/state";
import { createButton } from "../elements/button";

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
            try {
                removeFromProjects(todo);
            } catch (error) {
                console.error(`Error deleting todo: ${error}`);
            }
        }
        
        if (target.classList.contains("completeBtn")) {
            todo.completed = true;
            console.log("Todo marcado como concluído");
            lista.removeChild(card);
            logProjects();
        }
    })
}

export function showTodo(todo) {
    const lista = document.querySelector(".lista");
    
    const todoCard = document.createElement("div");
    todoCard.classList.add(`todoCard`);
    todoCard.dataset.id = `${todo.id}`;
    
    // cria informações do todoCard a partir do todo
    const details = [
        createTodoDetail("Todo", todo.getTitle(), "todoName"),
        createTodoDetail("Description", todo.getDescription(), "todoDescription"),
        createTodoDetail("Date limit", todo.getDueDate(), "todoDueDate"),
        createTodoDetail("Priority", todo.getPriority(), "todoPriority"),
        createTodoDetail("Notes", todo.getNotes(), "todoNotes")
    ];
    
    details.forEach(detail => todoCard.appendChild(detail));
    
    // cria os botões
    const delBtn = createButton("Delete", "delBtn");
    const completeBtn = createButton("Done", "completeBtn");
    
    todoCard.append(delBtn, completeBtn);

    // Monta os EvenetListener dos botões
    setupEventListeners(todoCard, todo, lista);    
    
    // Adiciona o card a lista no DOM
    lista.appendChild(todoCard);
}