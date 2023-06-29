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
box.style.padding = "5px";
box.style.borderRadius = "10px";
box.style.background = "#1A1818";

boxHeader.style.width = "100%";
boxHeader.style.height = "50%";
boxHeader.style.display = "flex";
boxHeader.style.justifyContent = "space-between";
boxHeader.style.padding = "10px";

title.innerHTML = "Add title";
title.style.fontFamily = 'Times, "Times New Roman", serif';
title.style.color = "#F5FFE7";

iconDots.style.color = "#F5FFE7";
iconDots.style.fontFamily = 'Times, "Times New Roman", serif';

boxFooter.style.width = "100%";
boxFooter.style.height = "50%";
boxFooter.style.display = "flex";
boxFooter.style.padding = "10px";
boxFooter.style.alignItems = "flex-end";

addCard.innerHTML = "+ Add a card";
addCard.style.width = "100%";
addCard.style.height = "90%";
addCard.style.padding = "2px";
addCard.style.border = "none";
addCard.style.borderRadius = '10px';
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
