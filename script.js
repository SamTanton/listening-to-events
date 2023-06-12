const bodyChangeColour = () => {
    const topBox = document.querySelector(".topBox")
    const randomColour = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColour}`;
    topBox.innerHTML = `#${randomColour}`;
}

const outerbutton = document.querySelector(".outerbutton")

outerbutton.addEventListener("click", () => {
bodyChangeColour()
})
