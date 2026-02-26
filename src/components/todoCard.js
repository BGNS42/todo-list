import { removeFromProjects, logProjects } from "../app/state";

export function showTodo(todo) {
    const lista = document.querySelector(".lista");

    const todoCard = document.createElement("div");
    todoCard.classList.add(`todoCard`);
    todoCard.dataset.id = `${todo.id}`;
    
    const todoName = document.createElement("li");
    todoName.classList.add(`todoName`);
    todoName.innerText = `Todo: ${todo.getTitle()}`;

    const todoDesc = document.createElement("li");
    todoDesc.classList.add(`todoDescription`);
    todoDesc.innerText = `Description: ${todo.getDescription()}`;

    const todoDueDate = document.createElement("li");
    todoDueDate.classList.add(`todoDueDate`);
    todoDueDate.innerText = `Date limit: ${todo.getDueDate()}`;

    const todoPriority = document.createElement("li");
    todoPriority.classList.add(`todoPriority`);
    todoPriority.innerText = `Priority: ${todo.getPriority()}`;

    const todoNotes = document.createElement("li");
    todoNotes.classList.add(`todoNotes`);
    todoNotes.innerText = `Notes: ${todo.getNotes()}`;

    const delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.innerText = "Delete";

    
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("completeBtn");
    completeBtn.innerText = "Done";
    
    const button = todoCard.querySelectorAll("button");
    
    todoCard.addEventListener("click", (e) => {
        switch(e.target.className) {
            case "delBtn":
                if (todo.id === todoCard.dataset.id) {
                    lista.removeChild(todoCard);
                    try {
                        removeFromProjects(todo);
                    } catch (error) {
                        console.error(`Error deleting todo: ${error}`);
                    }
                };
                break;
            case "completeBtn":
                todo.completed = true;
                todo.checklist = true;
                console.log("Done");
                lista.removeChild(todoCard)
                logProjects();
                break;
        };
    });


    lista.appendChild(todoCard);
    todoCard.appendChild(todoName);
    todoCard.appendChild(todoDesc);
    todoCard.appendChild(todoDueDate);
    todoCard.appendChild(todoPriority);
    todoCard.appendChild(todoNotes);

    todoCard.appendChild(delBtn);
    todoCard.appendChild(completeBtn);
}