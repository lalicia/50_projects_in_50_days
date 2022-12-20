import React from "react";
import {useState, useEffect} from "react";
import {createContext} from "react";

import "./ThemeClock.css";
import HomeButton from "../../components/HomeButton.js";

const ThemeContext = createContext(null);

let stamp = new Date();

function ThemeClock() {
    const [theme, setTheme] = useState("light");

    const [time, setTime] = useState(stamp);
    const [month, setMonth] = useState(time.getMonth());
    const [day, setDay] = useState(time.getDay());
    const [date, setDate] = useState(time.getDate());
    const [hours, setHours] = useState(time.getHours());
    const [hoursForClock, setHoursForClock] = useState(hours % 12);
    const [minutes, setMinutes] = useState(time.getMinutes());
    const [seconds, setSeconds] = useState(time.getSeconds());



    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    //needs to be above setTime - this function is from Stackoverflow
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min; 
    }

    useEffect(() => {
        setClock();

    }, [])

    useEffect(() => {
        let interval = setInterval(setClock, 1000)

        return () => clearInterval(interval);
    }, [])

    //dark mode toggle
    function toggleTheme(e) {
        setTheme((current) => (current === "light" ? "dark" : "light"))
    }


    //clock
    function setClock() {
        console.log("setClock ran");
        stamp = new Date();
        setTime(stamp);

        const mnth = stamp.getMonth();
        const dy = stamp.getDay();
        const dte = stamp.getDate();
        const hrs = stamp.getHours();
        const hrsForClock = hours % 12;
        const mins = stamp.getMinutes();
        const secs = stamp.getSeconds();
        
        setMonth(mnth);
        setDay(dy);
        setDate(dte);
        setHours(hrs);
        setHoursForClock(hrsForClock);
        setMinutes(mins);
        setSeconds(secs);
    }


    return (
        <ThemeContext.Provider value={{toggleTheme}}>
            <div className="tc-container" id={theme}>
                <button className="tc-toggle" onClick={toggleTheme}>{
                    theme === "light" ? "Dark Mode" : "Light Mode"
                }
                </button>

                <div className="tc-clock-container">
                    <div className="tc-clock">
                        <div className="tc-needle tc-hour" style={{transform: `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`}}></div>
                        <div className="tc-needle tc-minute" style={{transform: `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`}}></div>
                        <div className="tc-needle tc-second" style={{transform: `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`}}></div>
                        <div className="tc-centre-point"></div>
                    </div>

                    <div className="tc-time">{hours}:{minutes < 10 ? `0${minutes}` : minutes}</div>

                    <div className="tc-date">{days[day]}, {months[month]} <span className="tc-circle">{date}</span></div>
                </div>

                <HomeButton />
            </div>
        </ThemeContext.Provider>
        
    )
}

export default ThemeClock;