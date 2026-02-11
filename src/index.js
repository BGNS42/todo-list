import "./style/styles.css";
import "./style/pages.css";
// import { pageLoad } from "./components/pageLoad";
// import { sideBar } from "./elements/sideBar";
// import { workSpace } from "./elements/workSpace";
// import { Button } from "./elements/button";
// import { container } from "webpack";

const doc = document.querySelector(".container");

doc.addEventListener("click", (e) => {
    e.target.tagName === "BUTTON" ? alert(e.target.tagName) : e.preventDefault();
})

