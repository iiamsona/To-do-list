import changeText from "./ChangeText.js";

export default class Text {
    props = {}

    constructor(text){
        this.props.text = text;

        const parser = new DOMParser();
        const html = parser.parseFromString(this.render(), "text/html");

        const textt = html.body.querySelector(".text");
        textt.innerHTML = text;
        textt.addEventListener("click", () => changeText.call(textt));
        textt.innerHTML = localStorage.getItem("newText");
        return html.body.firstChild;
    }

    render(){ return `
        <div class = textdiv>
            <p class = 'text'>${this.props.text}</p>
        </div>
        `
    }
}

