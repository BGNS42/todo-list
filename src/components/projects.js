import { Todo } from "./todos.js"

const novoTodo = new Todo("Novo Afazer", "pqueno afazer", "12-08","alta", "pequena nota", false);

const novoTodo2 = new Todo("Novo Afazer2", "pqueno afazer2", "12-082","alta2", "pequena nota2", false);

const project =  {};

function populateProjects(key, something) {
    project[key] = something;
}

populateProjects("novoTodo", novoTodo.printDetails());
populateProjects("novoTodo2", novoTodo2.printDetails());

export { project };

// tem que ser uma classe de projeto que recebe diversos todos
// ou então um objeto que agrupa os objetos criados a partir dos todos