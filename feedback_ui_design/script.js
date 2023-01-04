const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
    //the parentNode bit means if you click anywhere in the little box with the face, it registers
    //important because people will click the little smileys but we want the class on the box
    if(e.target.parentNode.classList.contains("rating")) {
        console.log(e.target)
        removeActive();

        e.target.parentNode.classList.add("active")

        selectedRating = e.target.nextElementSibling.innerHTML;
        console.log(selectedRating);
    }
})

sendBtn.addEventListener("click", (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        <br />
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove("active")
    }
}