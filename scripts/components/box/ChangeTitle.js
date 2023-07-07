import Box from "./Box.js";

export default function changeTitle() {
  const maxLength = 30;
  const key = `box_title_${Box.count}`;

  //chjxaynanas vres pls
  
  console.log(key)
  const inputElement = document.createElement("input");
  inputElement.classList.add("inputElement");
  inputElement.value = this.textContent;
  this.parentNode.replaceChild(inputElement, this);

  inputElement.addEventListener("keydown", (event) => {
    inputElement.addEventListener("input", function () {
      this.value = this.value.slice(0, maxLength);
    });

    if (event.keyCode === 13 && inputElement.value != "") {
      localStorage.setItem(Box.incrementCount, inputElement.value);
      this.innerHTML = localStorage.getItem(Box.incrementCount);
      inputElement.parentNode.replaceChild(this, inputElement);
    }
  });
}
