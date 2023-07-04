export default function changeText() {
  const inputElement = document.createElement("input");
  inputElement.classList.add("inputElement");
  inputElement.value = this.textContent;
  const newTitle = document.createElement("p");
  newTitle.classList.add("newTitle");
  this.parentNode.replaceChild(inputElement, this);
  inputElement.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      newTitle.innerHTML = inputElement.value;
      inputElement.parentNode.replaceChild(newTitle, inputElement);
    }
  });
}
