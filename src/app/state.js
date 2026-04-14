const projetos = [];

function logProjects() {
    console.table(projetos);
}

function addProject(novoTodo) {
    projetos.push(novoTodo);
    logProjects();
}

function findProjectById(id) {
    return projetos.find(item => item.id === id);
}

function updateProject(updatedTodo) {
    const index = projetos.findIndex(item => item.id === updatedTodo.id);
    if (index !== -1) {
        projetos[index] = updatedTodo;
    }
    logProjects();
}

function removeFromProjects(todo) {
    const indexToRemove = projetos.findIndex(item => item.id === todo.id);
    if (indexToRemove !== -1) {
        projetos.splice(indexToRemove, 1);
    };
    logProjects();
}
    
export { addProject, removeFromProjects, findProjectById, updateProject, logProjects }