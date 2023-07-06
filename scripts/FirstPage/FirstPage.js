import Button from "../components/button/button.js"
import Box from "../components/box/Box.js";
import AddList from "../components/box/AddList.js";
import Text from "../components/box/Text.js";

export default function FirstPage (){
    const root = document.getElementById("root");

    const firstBoxe1 = new Box("Boxe", "To Do");
    root.appendChild(firstBoxe1);

     const firstBoxe2 = new Box("Boxes", "To Do");
     root.appendChild(firstBoxe2);
    

    // const myText = new Text("Barve ape");
    // root.appendChild(myText);

    // const createBtn = new Button("Create", "Create");
    // root.appendChild(createBtn);

    // const addList = new AddList();
    // root.appendChild(addList)
}
