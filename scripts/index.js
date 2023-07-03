import Button from "./components/button/button.js";
import Box from "./components/boxes/Box.js";
import AddList from "./components/boxes/AddList.js";

const root = document.getElementById("root");

const myBox = new Box("barev aperik", "hajox aperik");
root.appendChild(myBox);

const myButton = new Button("barev aperik2", "barev aperik");
root.appendChild(myButton);

const addList = new AddList();
root.appendChild(addList)
