import "./style/styles.css";
import "./style/pages.css";
import { pageLoad } from "./components/pageLoad";
import { sideBar } from "./elements/sideBar";
import { workSpace } from "./elements/workSpace";

const sideMenu = document.querySelector("#sideBar");
const b = sideBar();
sideMenu.appendChild(b);


pageLoad(workSpace);


