import Button from "./components/button/button.js";
import Box from "./components/boxes/Box.js";
import AddList from "./components/boxes/AddList.js";
import Text from "./components/boxes/Text.js";

const root = document.getElementById("root");

const firstBoxes = new Box("Boxes", "To Do");
root.appendChild(firstBoxes);

const myText = new Text("Barve ape");
root.appendChild(myText);

// const createBtn = new Button("Create", "Create");
// root.appendChild(createBtn);

// const addList = new AddList();
// root.appendChild(addList)
