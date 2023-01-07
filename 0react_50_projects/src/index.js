import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ExpandingCards from "./projects/ExpandingCards/ExpandingCards.js";
import ecdata from "./projects/ExpandingCards/expandingcardsdata.js";

import ProgressSteps from "./projects/ProgressSteps/ProgressSteps.js";
import RotatingNavigation from "./projects/RotatingNavigation/RotatingNavigation.js";
import HiddenSearchWidget from "./projects/HiddenSearchWidget/HiddenSearchWidget.js";
import BlurryLoading from "./projects/BlurryLoading/BlurryLoading.js";
import ScrollAnimation from "./projects/ScrollAnimation/ScrollAnimation.js";
import SplitLandingPage from "./projects/SplitLandingPage/SplitLandingPage.js";
import FormWaveAnimation from "./projects/FormWaveAnimation/FormWaveAnimation.js";
import SoundBoard from "./projects/SoundBoard/SoundBoard.js";
import DadJokes from "./projects/DadJokes/DadJokes.js";
import EventKeycodes from "./projects/EventKeycodes/EventKeycodes.js";
import FaqBoxes from "./projects/FaqBoxes/FaqBoxes.js";
import ChoicePicker from "./projects/ChoicePicker/ChoicePicker.js";
import AnimatedNavigation from "./projects/AnimatedNavigation/AnimatedNavigation.js";
import IncrementCounter from "./projects/IncrementCounter/IncrementCounter.js";
import DrinkWater from "./projects/DrinkWater/DrinkWater.js";
import MovieApp from "./projects/MovieApp/MovieApp.js";
import BackgroundSlider from "./projects/BackgroundSlider/BackgroundSlider.js";
import ThemeClock from "./projects/ThemeClock/ThemeClock.js";
import ButtonRippleEffect from "./projects/ButtonRippleEffect/ButtonRippleEffect.js";
import DragNDrop from "./projects/DragNDrop/DragNDrop.js";
import DrawingApp from "./projects/DrawingApp/DrawingApp.js";
import KineticLoader from "./projects/KineticLoader/KineticLoader.js";
import ContentPlaceholderCard from "./projects/ContentPlaceholderCard/ContentPlaceholderCard.js";
import StickyNavigation from "./projects/StickyNavigation/StickyNavigation.js";
import DoubleVerticalSlider from "./projects/DoubleVerticalSlider/DoubleVerticalSlider.js";
import ToastNotification from "./projects/ToastNotification/ToastNotification.js";
import GithubProfiles from "./projects/GithubProfiles/GithubProfiles.js";
import DoubleClickHeart from "./projects/DoubleClickHeart/DoubleClickHeart.js";
import AutoTextEffect from "./projects/AutoTextEffect/AutoTextEffect.js";
import PasswordGenerator from "./projects/PasswordGenerator/PasswordGenerator.js";
import GoodCheapFastCheckboxes from "./projects/GoodCheapFastCheckboxes/GoodCheapFastCheckboxes.js";
import NotesApp from "./projects/NotesApp/NotesApp.js";
import AnimatedCountdown from "./projects/AnimatedCountdown/AnimatedCountdown.js";
import ImageCarousel from "./projects/ImageCarousel/ImageCarousel.js";
import Hoverboard from "./projects/Hoverboard/Hoverboard.js";
import Pokedex from "./projects/Pokedex/Pokedex.js";
import MobileTabNavigation from "./projects/MobileTabNavigation/MobileTabNavigation.js";
import PasswordStrengthBackground from "./projects/PasswordStrengthBackground/PasswordStrengthBackground.js";
import ThreeDBoxesBackground from "./projects/ThreeDBoxesBackground/ThreeDBoxesBackground.js";
import VerifyAccountUI from "./projects/VerifyAccountUI/VerifyAccountUI.js";
import LiveUserFilter from "./projects/LiveUserFilter/LiveUserFilter.js";
import FeedbackUIDesign from "./projects/FeedbackUIDesign/FeedbackUIDesign.js";
import CustomRangeSlider from "./projects/CustomRangeSlider/CustomRangeSlider.js";
import NetflixNavigation from "./projects/NetflixNavigation/NetflixNavigation.js";
import QuizApp from "./projects/QuizApp/QuizApp.js";
import TestimonialBoxSwitcher from "./projects/TestimonialBoxSwitcher/TestimonialBoxSwitcher.js";
import RandomImageFeed from "./projects/RandomImageFeed/RandomImageFeed.js";
import TodoList from "./projects/TodoList/TodoList.js";
import CatchGame from "./projects/CatchGame/CatchGame.js";

//import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/expanding-cards" element={<ExpandingCards ecdata={ecdata}/>} />
        <Route path="/progress-steps" element={<ProgressSteps />} />
        <Route path="/rotating-navigation" element={<RotatingNavigation />} />
        <Route path="/hidden-search-widget" element={<HiddenSearchWidget />} />
        <Route path="/blurry-loading" element={<BlurryLoading />} />
        <Route path="/scroll-animation" element={<ScrollAnimation />} />
        <Route path="/split-landing-page" element={<SplitLandingPage />} />
        <Route path="/form-wave-animation" element={<FormWaveAnimation />} />
        <Route path="/sound-board" element={<SoundBoard />} />
        <Route path="/dad-jokes" element={<DadJokes />} />
        <Route path="/event-keycodes" element={<EventKeycodes />} />
        <Route path="/faq-boxes" element={<FaqBoxes />} />
        <Route path="/choice-picker" element={<ChoicePicker />} />
        <Route path="/animated-navigation" element={<AnimatedNavigation />} />
        <Route path="/increment-counter" element={<IncrementCounter />} />
        <Route path="/drink-water" element={<DrinkWater />} />
        <Route path="/movie-app" element={<MovieApp />} />
        <Route path="/background-slider" element={<BackgroundSlider />} />
        <Route path="/theme-clock" element={<ThemeClock />} />
        <Route path="/button-ripple-effect" element={<ButtonRippleEffect />} />
        <Route path="/drag-n-drop" element={<DragNDrop />} />
        <Route path="/drawing-app" element={<DrawingApp />} />
        <Route path="/kinetic-loader" element={<KineticLoader />} />
        <Route path="/content-placeholder-card" element={<ContentPlaceholderCard />} />
        <Route path="/sticky-navigation" element={<StickyNavigation />} />
        <Route path="/double-vertical-slider" element={<DoubleVerticalSlider />} />
        <Route path="/toast-notification" element={<ToastNotification />} />
        <Route path="/github-profiles" element={<GithubProfiles />} />
        <Route path="/double-click-heart" element={<DoubleClickHeart />} />
        <Route path="/auto-text-effect" element={<AutoTextEffect />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/good-cheap-fast-checkboxes" element={<GoodCheapFastCheckboxes />} />
        <Route path="/notes-app" element={<NotesApp />} />
        <Route path="/animated-countdown" element={<AnimatedCountdown />} />
        <Route path="/image-carousel" element={<ImageCarousel />} />
        <Route path="/hoverboard" element={<Hoverboard />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/mobile-tab-navigation" element={<MobileTabNavigation />} />
        <Route path="/password-strength-background" element={<PasswordStrengthBackground />} />
        <Route path="/3d-boxes-background" element={<ThreeDBoxesBackground />} />
        <Route path="/verify-account-ui" element={<VerifyAccountUI />} />
        <Route path="/live-user-filter" element={<LiveUserFilter />} />
        <Route path="/feedback-ui-design" element={<FeedbackUIDesign />} />
        <Route path="/custom-range-slider" element={<CustomRangeSlider />} />
        <Route path="/netflix-navigation" element={<NetflixNavigation />} />
        <Route path="/quiz-app" element={<QuizApp />} />
        <Route path="/testimonial-box-switcher" element={<TestimonialBoxSwitcher />} />
        <Route path="/random-image-feed" element={<RandomImageFeed />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/catch-game" element={<CatchGame />} />

      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
