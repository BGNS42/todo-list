export function sideBar() {
    const menuList = document.createElement("ul");

    const menuItem = document.createElement("li");
    menuItem.innerText = "Árvore mostrando os projetos e todos - EM PRODUÇÃO";

    menuList.appendChild(menuItem);

    return menuList;
}