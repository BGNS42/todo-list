import "./style/styles.css";
import "./style/pages.css";
import { pageLoad } from "./components/pageLoad";
import { Todo } from "./components/todos";
import { sideBar } from "./components/sideBar";
//import { workSpace, sideBar } from "./pages/home";

const novoTodo = new Todo("Novo Afazer", "pqueno afazer", "12-08","alta", "pequena nota", false);

const p = document.createElement("p");
p.classList = "paragrasd";
p.innerText = `${novoTodo.printDetails()}`

const sideMenu = document.querySelector("#sideBar");
const b = sideBar();
sideMenu.appendChild(b);


pageLoad(p);


