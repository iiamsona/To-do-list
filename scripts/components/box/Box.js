import changeTitle from "./ChangeTitle.js";

export default class Box {
  static count = 0;
  props = {};

  constructor(className, title) {
    this.props.className = className;
    this.props.title = title;

   
    Box.incrementCount();
    
    const parser = new DOMParser();
    const html = parser.parseFromString(this.render(), "text/html");
    const titlet = html.body.querySelector(".title");
    titlet.innerHTML = title;
    titlet.addEventListener("click", () => changeTitle.call(titlet));
    titlet.innerHTML = localStorage.getItem(Box.incrementCount);
     
    return html.body.firstChild;
  }

  static incrementCount(){
   return Box.count++;
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
