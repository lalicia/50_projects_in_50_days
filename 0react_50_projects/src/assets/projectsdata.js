//to add a new project just create an object for it in the below array

const projectsdata = [
    {
        name: "Expanding Cards",
        description: "A display of images as cards, that expand when clicked and retract when a new card is selected",
        image: require("../projects/ExpandingCards/expandingcards.JPG"),
        link: "/expanding-cards"
    },
    {
        name: "Progress Steps",
        description: "A visual display for progressing through a number of steps, with buttons to move to next or previous",
        image: require("../projects/ProgressSteps/progresssteps.JPG"),
        link: "/progress-steps"
    },
    {
        name: "Rotating Navigation",
        description: "A side navigation bar that swings in and tilts the rest of the page on button-click",
        image: require("../projects/RotatingNavigation/rotatingnavigation.JPG"),
        link: "/rotating-navigation"
    }

]

export default projectsdata;