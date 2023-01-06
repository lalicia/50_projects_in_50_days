//"https://source.unsplash.com/random/"
// img.src = "https://source.unsplash.com/random/300x200?sig=${Math.random()}" - this works but returns all same image

const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/"
const rows = 5;

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img");

    img.src = `${unsplashURL}${getRandomSize()}?sig=${Math.random()}`
    

    container.appendChild(img);
}


function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300
}