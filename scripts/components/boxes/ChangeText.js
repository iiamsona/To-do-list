export default function changeText (){
    const inputEl = document.createElement("textarea");
    inputEl.classList.add("inputEl");
    inputEl.value = this.textContent;

    this.parentNode.replaceChild(inputEl, this);

    inputEl.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        localStorage.setItem("newText", inputEl.value);
        this.innerHTML = localStorage.getItem("newText");
        inputEl.parentNode.replaceChild(this, inputEl);
      }
    });
}