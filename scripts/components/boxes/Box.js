import changeText from "./ChnageText.js";

export default class Box {
  props = {};

  constructor(className, title) {
    this.props.className = className;
    this.props.title = title;

    const parser = new DOMParser();
    const html = parser.parseFromString(this.render(), "text/html");
    const titlet = html.body.querySelector('.title');
    titlet.addEventListener("click", () => changeText.call(titlet));
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


