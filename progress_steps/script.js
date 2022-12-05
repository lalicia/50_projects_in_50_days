//bring in what we need to start

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
//as have more than one circle, need to use qSA and .class to bring them in as a nodelist
const circles = document.querySelectorAll(".circle");


let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    //we only want it to increment to the number of circles, we don't want it to go past its bounds, so this if statement will check and restrict
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener("click", () => {
    currentActive--;

    //we don't want it to go less than one, so check and restrict here
    if (currentActive < 1) {
        currentActive = 1;
    }

    update(); 
})

function update() {
    //make sure circles only blue when they should be
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active");

    //this controls the bar changing color to blue, is changing the width % for the css style, based on amount of active circles / overall circles
    //need the - 1 bits otherwise the bar would light up into the middle of the next section
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

    //controls buttons being disabled or not based on which step we're on
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}