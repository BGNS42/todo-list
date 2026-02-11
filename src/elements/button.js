// export function createButton(type, label) {
//     const button = document.createElement("button");
//     button.classList = type;
//     button.innerText = label;
// }

class Button {
    constructor(type, label) {
        this.type = type;
        this.label = label;
    }

    create() {
        const button = document.createElement("button");
        button.classList = this.type;
        button.innerText = this.label;
        return button;
    }
}

export { Button }