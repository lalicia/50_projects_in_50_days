import React from "react";
import {useState, useEffect} from "react";
import {createContext} from "react";

import "./ThemeClock.css";
import HomeButton from "../../components/HomeButton.js";

const ThemeContext = createContext(null);

function ThemeClock() {
    const [theme, setTheme] = useState("light");



    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    //dark mode toggle
    function toggleTheme(e) {
        setTheme((current) => (current === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{toggleTheme}}>
            <div className="tc-container" id={theme}>
                <button className="tc-toggle" onClick={toggleTheme}>Dark Mode</button>

                <div className="tc-clock-container">
                    <div className="tc-clock">
                        <div className="tc-needle tc-hour"></div>
                        <div className="tc-needle tc-minute"></div>
                        <div className="tc-needle tc-second"></div>
                        <div className="tc-centre-point"></div>
                    </div>

                    <div className="tc-time">12:00</div>

                    <div className="tc-date"><span className="tc-circle"></span></div>
                </div>

                <HomeButton />
            </div>
        </ThemeContext.Provider>
        
    )
}

export default ThemeClock;