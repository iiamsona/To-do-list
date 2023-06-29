const root = document.getElementById("root");
const button = document.createElement("button");

button.innerHTML = "Add card";
button.style.fontSize = "18px";

button.style.height = "5%";
button.style.width = "7%";
button.style.minHeight = "45px";
button.style.minWidth = "50px";

button.style.border = "none";
button.style.borderRadius = "5px";
button.style.background = "#CC99FF";
button.style.color = "#000000";

button.style.cursor = "pointer";

button.addEventListener("mouseover", () => {
  button.style.background = "#D5A5FF";
});

button.addEventListener("mouseout", () => {
  button.style.background = "#CC99FF";
});

root.appendChild(button);
