import React from "react";
import {useState} from "react";

import "./DadJokes.css";
import HomeButton from "../../components/HomeButton.js";

function DadJokes() {
    const [joke, setJoke] = useState("Click the button to get the ball rolling...")


    async function generateJoke() {
        const config = {
            headers: {
                "Accept": "application/json"
            }
        }
    
        const res = await fetch("https://icanhazdadjoke.com", config);
    
        const data = await res.json();
        setJoke(data.joke)
    }

    return (
        <div className="dj-container">
            <div className="dj-small-container">
                <h3 className="dj-h3">Don't Laugh Challenge</h3>
                <div id="joke" className="dj-joke">
                    {joke}
                </div>
                <button id="jokeBtn" className="dj-btn" onClick={generateJoke}>Get Another Joke</button>
            </div>

            <HomeButton />
        </div>
    )
}

export default DadJokes;