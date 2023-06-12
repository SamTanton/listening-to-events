const bodyChangeColour = () => {
    const topBox = document.querySelector(".topBox")
    const randomColour = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColour}`;
    topBox.innerHTML = `#${randomColour}`;
}

const boxChangeColour = () => {
    const box = document.querySelector(".box")
    const randomColour = Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = `#${randomColour}`;
    box.innerHTML = `#${randomColour}`;
}


const outerbutton = document.querySelector(".outerbutton")

outerbutton.addEventListener("click", () => {
bodyChangeColour()
})

const innerbutton = document.querySelector(".innerbutton")

innerbutton.addEventListener("click", () => {
    boxChangeColour()
    })