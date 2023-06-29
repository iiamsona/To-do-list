const root = document.getElementById("root");

const box = document.createElement("div");

const boxHeader = document.createElement("div");
const title = document.createElement("p");
const iconDots = document.createElement("p");
iconDots.innerHTML = "···";

const boxFooter = document.createElement("div");
const addCard = document.createElement("button");

box.style.width = "270px";
box.style.height = "90px";
box.style.background = "#1A1818";
box.style.borderRadius = "15px";
box.style.padding = "5px";

boxHeader.style.display = "flex";
boxHeader.style.justifyContent = "space-between";
boxHeader.style.width = "100%";
boxHeader.style.height = "50%";
boxHeader.style.borderRadius = "15px";
boxHeader.style.padding = "10px";

title.innerHTML = "Add title";
title.style.fontFamily = 'Times, "Times New Roman", serif';
title.style.color = "#F5FFE7";

iconDots.style.color = "#F5FFE7";

boxFooter.style.width = "100%";
boxFooter.style.height = "50%";
boxFooter.style.borderRadius = "15px"; //jnjel
boxFooter.style.padding = "10px";
boxFooter.style.display = "flex";
boxFooter.style.alignItems = "flex-end";

addCard.style.width = "100%";
addCard.style.height = "90%";
addCard.style.borderRadius = "5px"; //jnjel
addCard.style.padding = "1px";
addCard.style.border = "none";
addCard.innerHTML = "+ Add a card";
addCard.style.textAlign = "left";
addCard.style.color = "#7F7F7F";
addCard.style.background = "#1A1818";

addCard.addEventListener("mouseover", () => {
  addCard.style.background = "#E3DDC4";
  addCard.style.opacity = "0.5";
});

addCard.addEventListener("mouseout", () => {
  addCard.style.background = "#1A1818";
});

boxHeader.appendChild(title);
boxHeader.appendChild(iconDots);

boxFooter.appendChild(addCard);

box.appendChild(boxHeader);
box.appendChild(boxFooter);

root.appendChild(box);
