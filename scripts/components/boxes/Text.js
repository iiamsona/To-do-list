export default class Text {
    props = {}

    constructor(label){
        this.props.label = label;

        const parser = new DOMParser();
        const html = parser.parseFromString(this.render(), "text/html");
        return html.body.firstChild;
    }

    render(){ return `
        <div class = textdiv>
            <p class = 'label'>${this.props.label}</p>
        </div>
        `
    }
}

