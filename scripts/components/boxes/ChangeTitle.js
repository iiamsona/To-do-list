export default function changeTitle() {
  const maxLength = 30;

  const inputElement = document.createElement("input");
  inputElement.classList.add("inputElement");
  inputElement.value = this.textContent;

  this.parentNode.replaceChild(inputElement, this);

  inputElement.addEventListener("keydown", (event) => {
    inputElement.addEventListener("input", function () {
      this.value = this.value.slice(0, maxLength);
    });

    if (event.keyCode === 13) {
        localStorage.setItem("newTitle", inputElement.value);
      this.innerHTML = localStorage.getItem("newTitle");
      inputElement.parentNode.replaceChild(this, inputElement);
    }
  });
}
