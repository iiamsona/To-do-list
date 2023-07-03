export default class Button {
  props = {};

  constructor(className, label) {
    this.props.className = className;
    this.props.label = label;

    const parser = new DOMParser();
    const html = parser.parseFromString(this.render(), "text/html");
    return html.body.firstChild;
  }

  render() {
    return `
 <button class = '${this.props.className}'>
 ${this.props.label}
 </button>
  `;
  }
}

// export const button = document.createElement("button");

// button.innerHTML = "Add card";

// button.addEventListener("mouseover", () => {
//   button.style.background = "#D5A5FF";
// });

// button.addEventListener("mouseout", () => {
//   button.style.background = "#CC99FF";
// });

// // root.appendChild(button);
