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
    },
    {
        id: 14,
        name: "Animated Navigation",
        description: "A nav bar that when you click to open/close, transitions with various CSS transforms",
        image: require("../projects/AnimatedNavigation/animatednavigation.JPG"),
        link: "/animated-navigation"
    },
    {
        id: 15,
        name: "Increment Counter",
        description: "Counters for social media followings with an increment animation on load",
        image: require("../projects/IncrementCounter/incrementcounter.JPG"),
        link: "/increment-counter"
    },
    {
        id: 16,
        name: "Drink Water",
        description: "A large cup that fills in increments upon selecting how many small cups you've had to drink",
        image: require("../projects/DrinkWater/drinkwater.JPG"),
        link: "/drink-water"
    },
    {
        id: 17,
        name: "Movie App",
        description: "Requesting info from The Movie DB API and displaying in an app, also providing a search function",
        image: require("../projects/MovieApp/movieapp.JPG"),
        link: "/movie-app"
    },
    {
        id: 18,
        name: "Background Slider",
        description: "Background and foreground images set on button click, sized to fit together",
        image: require("../projects/BackgroundSlider/backgroundslider.JPG"),
        link: "/background-slider"
    },
    {
        id: 19,
        name: "Theme Clock",
        description: "Clock with time and date display, working from Date() function - also featuring dark/light mode toggle",
        image: require("../projects/ThemeClock/themeclock.JPG"),
        link: "/theme-clock"
    },
    {
        id: 20,
        name: "Button Ripple Effect",
        description: "Button that captures where the user clicks and has a ripple animation",
        image: require("../projects/ButtonRippleEffect/buttonrippleeffect.JPG"),
        link: "/button-ripple-effect"
    },
    {
        id: 21,
        name: "Drag N Drop",
        description: "Implementation of HTML Drag and Drop API with an image that can be dragged and dropped between boxes",
        image: require("../projects/DragNDrop/dragndrop.JPG"),
        link: "/drag-n-drop"
    },
    {
        id: 22,
        name: "Drawing App",
        description: "Using Canvas API to create drawing app where user can change colour/size of pen and draw",
        image: require("../projects/DrawingApp/drawingapp.JPG"),
        link: "/drawing-app"
    },
    {
        id: 23,
        name: "Kinetic Loader",
        description: "Loading animation with triangles animated by keyframes",
        image: require("../projects/KineticLoader/kineticloader.JPG"),
        link: "/kinetic-loader"
    },
    {
        id: 24,
        name: "Content Placeholder Card",
        description: "Card with a keyframe animated placeholder for loading",
        image: require("../projects/ContentPlaceholderCard/contentplaceholdercard.JPG"),
        link: "/content-placeholder-card"
    }

]

export default projectsdata;