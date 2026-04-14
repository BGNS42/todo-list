export class Todo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    id = crypto.randomUUID();
    completed = false;

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    getNotes() {
        return this.notes;
    }

    editTodo(todo, prop, eddited) {
        console.log("editado");
        // Precisa abrir novamente o modal com os campos do to-do atual, com opção de editar os campos e salvar as alterações ou submter. Ao submeter, precisa atualizar a informação no DOM e na lista projects = []
    }

    printDetails() {
        return (`Title: ${this.getTitle()}\nDescription: ${this.getDescription()}\nDate Limit: ${this.getDueDate()}\nPriority: ${this.getPriority()}\nNotes: ${this.getNotes()}`);
    }
}