export default class Box {
  props = {};

  constructor(className, title) {
    this.props.className = className;
    this.props.title = title;

    const parser = new DOMParser();
    const html = parser.parseFromString(this.render(), "text/html");
    return html.body.firstChild;

    addCardListener();
  }

  render() {
    return `
  <div class = '${this.props.className}'>
    <div class = 'box'>
        <div class = 'boxHeader'>
          <p class = 'title'> '${this.props.title}'</p>
          <button class = 'dots'>···</button>
        </div>
        <div class = 'boxFooter'>
          <button class = 'addCard'> + Add a card</button>
        </div>
    </div>
  </div>
  `;
  }

  addCardListener() {
    const addCardButton = document.getElementsByClassName("addCard");
    addCardButton.addEventListener("mouseover", () => {
      addCardButton.style.background = "#E3DDC4";
      addCardButton.style.opacity = "0.5";
    });
  }
}

// addCard.addEventListener("mouseout", () => {
//   addCard.style.background = "#1A1818";
// });
