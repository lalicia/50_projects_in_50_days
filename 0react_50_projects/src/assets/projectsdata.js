//to add a new project just create an object for it in the below array

const projectsdata = [
    {
        id: 1,
        name: "Expanding Cards",
        description: "A display of images as cards, that expand when clicked and retract when a new card is selected",
        image: require("../projects/ExpandingCards/expandingcards.JPG"),
        link: "/expanding-cards"
    },
    {
        id: 2,
        name: "Progress Steps",
        description: "A visual display for progressing through a number of steps, with buttons to move to next or previous",
        image: require("../projects/ProgressSteps/progresssteps.JPG"),
        link: "/progress-steps"
    },
    {
        id: 3,
        name: "Rotating Navigation",
        description: "A side navigation bar that swings in and tilts the rest of the page on button-click",
        image: require("../projects/RotatingNavigation/rotatingnavigation.JPG"),
        link: "/rotating-navigation"
    },
    {
        id: 4,
        name: "Hidden Search Widget",
        description: "A search widget that expands when the icon is clicked to allow searching",
        image: require("../projects/HiddenSearchWidget/hiddensearchwidget.JPG"),
        link: "/hidden-search-widget"
    },
    {
        id: 5,
        name: "Blurry Loading",
        description: "A blurred background image that sharpens into focus, with an in-focus loading percentage that fades out of view",
        image: require("../projects/BlurryLoading/blurryloading.JPG"),
        link: "/blurry-loading"
    }

]

export default projectsdata;