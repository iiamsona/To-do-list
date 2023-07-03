import Button from "./components/button/button.js";
import Box from "./components/box/box.js";
const root = document.getElementById("root");

const myBox = new Box("barev aperik", "barev aperik");
root.appendChild(myBox);

const myButton = new Button("barev aperik2", "barev aperik");
root.appendChild(myButton);
