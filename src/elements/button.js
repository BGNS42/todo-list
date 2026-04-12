// export function createButton(type, label) {
//     const button = document.createElement("button");
//     button.classList = type;
//     button.innerText = label;
// }

function createButton(text, className, onClick) {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.classList.add(className);
    if (onClick) btn.onClick = onClick;
    return btn;
}

export { createButton }