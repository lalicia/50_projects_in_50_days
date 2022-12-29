const loveMe = document.querySelector(".loveMe")
const times = document.querySelector(".times")

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener("click", (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0;
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement("i")
    heart.classList.add("fas")
    heart.classList.add("fa-heart")

    //coordinates within viewport
    const x = e.clientX
    const y = e.clientY

    //coordinates for image
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    //coordinates of position of click within image
    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    //to remove so they don't all stack up in the code
    setTimeout(() => heart.remove(), 1000)
}