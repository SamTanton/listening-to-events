const outerbutton = document.querySelector(".outerbutton")
const innerbutton = document.querySelector(".innerbutton")

outerbutton.addEventListener("click", () => {
    const topBox = document.querySelector(".topBox")
    const randomColour = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColour}`;
    topBox.innerHTML = `#${randomColour}`;
})

innerbutton.addEventListener("click", () => {
    const box = document.querySelector(".bottomBox")
    const randomColour = Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = `#${randomColour}`;
    box.innerHTML = `#${randomColour}`;
})