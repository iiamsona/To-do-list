import changeTitle from "./ChangeTitle.js";

export default class Box {
  props = {};

  constructor(className, title) {
    this.props.className = className;
    this.props.title = title;

    const parser = new DOMParser();
    const html = parser.parseFromString(this.render(), "text/html");
    const titlet = html.body.querySelector(".title");
    titlet.innerHTML = localStorage.getItem("newTitle");
    titlet.addEventListener("click", () => changeTitle.call(titlet));
    return html.body.firstChild;
  }

  render() {
    return `
  <div class = '${this.props.className}'>
    <div class = 'box'>
        <div class = 'boxHeader'>
          <p class = 'title'> ${this.props.title}</p>
          <button class = 'dots'>···</button>
        </div>
        <div class = 'boxFooter'>
          <button class = 'addCard'> + Add a card</button>
        </div>
    </div>
  </div>
  `;
  }
}
