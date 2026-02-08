import "./style/styles.css";
import { greeting } from "./components/greeting.js";
import odinImage from "./assets/odin.png";

console.log(greeting);

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);