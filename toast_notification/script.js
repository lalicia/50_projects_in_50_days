const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
    "Nice butt!",
    "Your hair looks nice today",
    "You're so smart :)",
    "Treat yo'self, it's snack time"
]

const types = [
    "info",
    "success",
    "error"
]

button.addEventListener("click", () => createNotification());

//to do a specific message could do this and add param to function, and a type to change the color
// button.addEventListener("click", () => createNotification("This is invalid data", "success"));

function createNotification(message = null, type = null) {
    const notif = document.createElement("div")
    notif.classList.add("toast");
    //type would be like a CSS class, info is matching basic color so no different so can set as end of ternary instead of getRandomType
    notif.classList.add(type ? type : getRandomType());

    notif.innerText = message ? message : getRandomMessage();

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

//to change msg color
function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}