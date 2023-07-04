export default function changeText() {
  const maxLength = 30;
  const inputElement = document.createElement("input");
  inputElement.classList.add("inputElement");
  inputElement.value = this.textContent;
  const newTitle = document.createElement("p");
  newTitle.classList.add("newTitle");
  this.parentNode.replaceChild(inputElement, this);
  inputElement.addEventListener("keydown", (event) => {
    inputElement.addEventListener("input", function () {
      this.value = this.value.slice(0, maxLength);
    });
    if (event.keyCode === 13) {
      newTitle.innerHTML = inputElement.value;
      inputElement.parentNode.replaceChild(newTitle, inputElement);
    }
  });
}
