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

//import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
