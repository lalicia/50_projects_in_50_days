const buttons = document.querySelectorAll(".ripple");

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        //will get position on whole page but just within the button
        const x = e.clientX;
        const y = e.clientY;
        //console.log(x, y);

        //will get the position of the button on the page
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        //now want to calculate WHERE in the BUTTON we click
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        //creating the circle
        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.top = yInside + "px";
        circle.style.left = xInside + "px";

        //this keyword doesn't work with arrow functions
        this.appendChild(circle);

        //need to remove from DOM after as vanilla JS
        setTimeout(() => circle.remove(), 500)
    })
})