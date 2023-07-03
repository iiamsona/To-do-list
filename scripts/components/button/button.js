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
 <button class = '${this.props.className}' id = 'button'>
 ${this.props.label}
 </button>
  `;
  }
}

