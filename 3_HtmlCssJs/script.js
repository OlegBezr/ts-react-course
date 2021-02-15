// click – происходит, когда кликнули на элемент левой кнопкой мыши
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
// mouseover / mouseout – когда мышь наводится на / покидает элемент
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.\
// mousemove – при движении мыши

// submit – пользователь отправил форму <form>
// focus – пользователь фокусируется на элементе, например нажимает на <input>

// keydown и keyup – когда пользователь нажимает / отпускает клавишу
function changeButtonName() { 
    let button = document.getElementById("button");
    button.innerText = "Second text";
}

function contextMenu() {
    alert("contextMenu");
}
let button = document.getElementById("button");
// button.addEventListener("click", changeButtonName)
// button.addEventListener("mouseover", contextMenu)

let input = document.getElementById("input");
// input.addEventListener("focus", contextMenu)
console.log(input.focus());

