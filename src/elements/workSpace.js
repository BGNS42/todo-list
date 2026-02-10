import { project } from "../components/projects.js"

const workSpace = document.createElement("div");
workSpace.id = "workSpace";

function populateWorkSpace() {
    Object.keys(project).forEach(item => {
        console.log(item);
        const pPasta = document.createElement("div");
        pPasta.id = item;
        pPasta.classList = "pastaProjeto";
        pPasta.innerText += `${item}`;

        workSpace.appendChild(pPasta);
    });
}

populateWorkSpace();

export { workSpace }
