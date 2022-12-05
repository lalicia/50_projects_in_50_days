//we need to change the class on each div to make the transition happen

//selecting all panels puts them in a nodelist which is basically an array, so can use array methods
const panels = document.querySelectorAll(".panel");

//when click on a panel, all other active classes will be removed (so other panels resize small and h3 disappears), and active class will be added to the panel clicked
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses()
        panel.classList.add("active");
    })
});

//function to removed active class, called above
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}