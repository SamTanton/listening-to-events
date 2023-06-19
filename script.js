const outerbutton = document.querySelector(".outerbutton")

outerbutton.addEventListener("click", () => {
    const topBox = document.querySelector(".topBox")
    const randomColour = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColour}`;
    topBox.innerHTML = `#${randomColour}`;
})

const innerbutton = document.querySelector(".innerbutton")

innerbutton.addEventListener("click", () => {
    const box = document.querySelector(".bottomBox")
    const randomColour = Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = `#${randomColour}`;
    box.innerHTML = `#${randomColour}`;
})

const circleShape = document.querySelector(".circleShape")

const circleText = document.querySelector(".circleText")

circleShape.addEventListener("mouseover", () => {
    circleText.innerText = `You are inside me!`;
    circleShape.style.backgroundColor = `#53FFFB`;
})

circleShape.addEventListener("mouseout", () => {
    circleText.innerText = `Please get inside me again! I miss you`;
    circleShape.style.backgroundColor = `#9aade1`;
})