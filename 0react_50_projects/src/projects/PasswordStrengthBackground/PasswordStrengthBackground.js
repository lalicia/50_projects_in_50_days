import React from "react";
import {useState} from "react";

import "./PasswordStrengthBackground.css";
import HomeButton from "../../components/HomeButton.js";

function PasswordStrengthBackground() {
    const [length, setLength] = useState(0);
    const [blurValue, setBlurValue] = useState(20)

    function handleInput(e) {
        const input = e.target.value;
        setLength(input.length);
    
        setBlurValue(20 - length * 2);
    }

    return (
        <div className="psb-container">
            <div className="psb-test">
            <div className="psb-background" id="background"
            style={{filter: `blur(${blurValue}px)`}}></div>

            <div className="psb-checker-box">
                <h1>Image Password Strength</h1>

                <p>Change the password to see the effect</p>

                <div className="psb-email">
                    <label htmlFor="email">Email</label>
                    <input className="psb-email" type="text" id="email" placeholder="Enter your email" />
                </div>
                
                <div className="psb-email">
                    <label htmlFor="password">Password</label>
                    <input className="psb-password" type="password" id="password" placeholder="Enter the password" 
                    onInput={handleInput}    
                    />
                </div>

                <button className="psb-checker-button" type="submit">Submit</button>
            </div>

            </div>
            

            <HomeButton />
        </div>
    )
}

export default PasswordStrengthBackground;