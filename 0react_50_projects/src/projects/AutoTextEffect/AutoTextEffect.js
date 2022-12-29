import React from "react";
import {useState, useEffect} from "react";

import "./AutoTextEffect.css";
import HomeButton from "../../components/HomeButton.js";

const theText = "I want pizza..."

function AutoTextEffect() {
    const [speed, setSpeed] = useState(300);
    const [text, setText] = useState("");
    //to have value show in the input when the user increases/decreases
    const [inputValue, setInputValue] = useState(1);

    //the typing effect
    useEffect(() => {
        const timeout = setTimeout(() => {
            setText(theText.slice(0, text.length + 1))
        }, speed)

        return () => clearTimeout(timeout)
    }, [text, speed])

    //resets the text and makes it start again
    useEffect(() => {
        let timeout;
        if(text === theText) {
            timeout = setTimeout(() => setText(""), speed * 2)
        }
        return () => clearTimeout(timeout);
    }, [text, speed])

    function handleInput(e) {
        setSpeed(300 / e.target.value)
        setInputValue(e.target.value)
    }

    return (
        <div className="ate-container">
            <h1 className="ate-text" id="text">{text}</h1>

            <div className="ate-speed-div">
                <label htmlFor="speed">Speed:</label>
                <input type="number" id="speed" className="ate-speed-input" value={inputValue} min="1" max="5" step="1" onInput={handleInput} />
            </div>

            <HomeButton />
        </div>
    )
}

export default AutoTextEffect;