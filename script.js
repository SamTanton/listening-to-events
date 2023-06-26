function changeColour (colourTarget, textTarget) {
    const randomColour = Math.floor(Math.random()*16777215).toString(16);
    colourTarget.style.backgroundColor = `#${randomColour}`;
    textTarget.innerHTML = `#${randomColour}`;
}

document.querySelector(".outerbutton").addEventListener("click", () => {
    changeColour(document.body, document.querySelector(".topBox"))
 })
document.querySelector(".innerbutton").addEventListener("click", () => {
    changeColour(document.querySelector(".bottomBox"), document.querySelector(".bottomBox"))
})

const circleShape = document.querySelector(".circleShape")
function circleChange (message, colour) {
    document.querySelector(".circleText").innerText = message;
        circleShape.style.backgroundColor = colour;
}

circleShape.addEventListener(`mouseover`, () => {
    circleChange (`You are inside me!`, `#53FFFB`)
})
circleShape.addEventListener(`mouseout`, () => {
    circleChange (`Please come back! I miss you`, `#9AADE1`)
})