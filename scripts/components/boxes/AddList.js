export default class AddList {
  constructor() {
    const parser = new DOMParser();
    const html = parser.parseFromString(this.render(), "text/html");
    return html.body.firstChild;
  }

  render() {
    return `
    <button id = 'addList'>
    + Add another list
    </button>
    `;
  }
}