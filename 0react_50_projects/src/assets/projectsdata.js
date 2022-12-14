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
    },
    {
        id: 6,
        name: "Scroll Animation",
        description: "Animated content that moves into view from opposite sides as the user scrolls",
        image: require("../projects/ScrollAnimation/scrollanimation.JPG"),
        link: "/scroll-animation"
    },
    {
        id: 7,
        name: "Split Landing Page",
        description: "Each side expands when hovered over",
        image: require("../projects/SplitLandingPage/splitlandingpage.JPG"),
        link: "/split-landing-page"
    },
    {
        id: 8,
        name: "Form Wave Animation",
        description: "Login form with animation on labels so they wave up when in focus",
        image: require("../projects/FormWaveAnimation/formwaveanimation.JPG"),
        link: "/form-wave-animation"
    },
    {
        id: 9,
        name: "Sound Board",
        description: "Dashboard with buttons that play sounds, each sound will stop when next clicked",
        image: require("../projects/SoundBoard/soundboard.JPG"),
        link: "/sound-board"
    },
    {
        id: 10,
        name: "Dad Jokes",
        description: "Joke generator that uses async/await fetch to make a GET request to an API",
        image: require("../projects/DadJokes/dadjokes.JPG"),
        link: "/dad-jokes"
    },
    {
        id: 11,
        name: "Event Keycodes",
        description: "Facility to obtain keycode on keypress",
        image: require("../projects/EventKeycodes/eventkeycodes.JPG"),
        link: "/event-keycodes"
    },
    {
        id: 12,
        name: "FAQ Boxes",
        description: "FAQ boxes that expand on selection and retract when closed out of",
        image: require("../projects/FaqBoxes/faqboxes.JPG"),
        link: "/faq-boxes"
    },
    {
        id: 13,
        name: "Choice Picker",
        description: "Enter choices which are created as tags and then one is chosen at random with an animation",
        image: require("../projects/ChoicePicker/choicepicker.JPG"),
        link: "/choice-picker"
    }

]

export default projectsdata;