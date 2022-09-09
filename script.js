let buttonEl = document.querySelector(".button");
let outerLineEl = document.querySelector(".line")
let innerLineEl = document.querySelector(".innerline")
let pEl = document.querySelector("p");
let total = 0;

buttonEl.addEventListener('drag', () => {
    console.log("Mouse Dragged")
    let outerwidth = outerLineEl.offsetWidth;
    let innerwidth = innerLineEl.offsetWidth;

    if (innerwidth < outerwidth) {
        console.log("Hello");
        let width = innerwidth + 1;
        innerLineEl.style.width = width + "px";
        buttonEl.style.left = width + "px";
        pEl.innerText = "Value:"+ width;
    }
})