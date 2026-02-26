// import { Todo } from "./todos.js"

// const novoTodo = new Todo("Novo Afazer", "pqueno afazer", "12-08","alta", "pequena nota", false);

// const novoTodo2 = new Todo("Novo Afazer2", "pqueno afazer2", "12-082","alta2", "pequena nota2", false);

// const project =  [];

// function populateProjects(something) {
//     project.push(something);
// }

// populateProjects("novoTodo", novoTodo.printDetails());
// populateProjects("novoTodo2", novoTodo2.printDetails());

// export { project };

// tem que ser uma classe de projeto que recebe diversos todos
// ou então um objeto que agrupa os objetos criados a partir dos todos

// --------------------------------------

const projetos = [];


function addProject(novoTodo) {
    projetos.push(novoTodo);
    logProjects();
}

function logProjects() {
    console.table(projetos);
}

function removeFromProjects(todo) {
    const indexToRemove = projetos.findIndex(item => item.id === todo.id);
    if (indexToRemove !== -1) {
        projetos.splice(indexToRemove, 1);
    };
    logProjects();
}
    
export { addProject, removeFromProjects, logProjects }