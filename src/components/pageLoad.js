function pageLoad(item = "Empty") {
    const content = document.querySelector("#content");
    content.innerText = "";
    content.appendChild(item);
}

export { pageLoad };