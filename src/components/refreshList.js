import { showTodo } from "./todoCard";

export function refreshList(item) {
    // const list = document.querySelector(".lista");
    try {
        showTodo(item);
    } catch (error) {
        console.error(`An error occurred: cannot add item\nMessage: ${error}`);
    };
}