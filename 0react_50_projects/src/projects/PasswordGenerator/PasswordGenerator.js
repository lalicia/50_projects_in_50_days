import React from "react";
import {useState, useRef} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboard} from "@fortawesome/free-regular-svg-icons";

import "./PasswordGenerator.css";
import HomeButton from "../../components/HomeButton.js";

function PasswordGenerator() {
    const [length, setLength] = useState(20);
    const [password, setPassword] = useState("");
    const [checkedLower, setCheckedLower] = useState(true);
    const [checkedUpper, setCheckedUpper] = useState(true);
    const [checkedNumber, setCheckedNumber] = useState(true);
    const [checkedSymbol, setCheckedSymbol] = useState(true);


    //use this to select what functions called based on options selected
    const randomFunc = {
        lower: getRandomLower,
        upper: getRandomUpper,
        number: getRandomNumber,
        symbol: getRandomSymbol
    }

    function handleClick() {
        const hasLower = checkedLower
        const hasUpper = checkedUpper
        const hasNumber = checkedNumber
        const hasSymbol = checkedSymbol
        console.log(hasLower, hasUpper, hasNumber, hasSymbol)
        
        generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
    }

    //set length value from user selection
    function handleLengthChange(e) {
        setLength(e.target.value)
    }

    //for copying to clipboard using Clipboard API and writeText (google for info)
    function handleClickCopy() {
        navigator.clipboard.writeText(password)
        alert("Password copied to clipboard!")
    }

    function generatePassword(lower, upper, number, symbol, length) {
        let generatedPassword = "";
        //count of how many selected options
        const typesCount = lower + upper + number + symbol;
    
        //we only want to know which are true (which are selected)
        const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item  => Object.values(item)[0])
        console.log(typesArr)
    
        //if nothing selected to be in password, nothing returned
        if(typesCount === 0) {
            return setPassword("")
        }
    
        //uses array of objects with functions to loop through and select the functions to call for generating characters
        for(let i = 0; i < length; i += typesCount) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0]
                generatedPassword += randomFunc[funcName]()
            })
        }
    
        //returns at specified length
        const finalPassword = generatedPassword.slice(0, length)
        setPassword(finalPassword);
        // return finalPassword;
    }

    //functions for returning randomChars
    function getRandomLower() {
        //lowercase ascii are from 97-122, so here saying pick a number up to length of alphabet and add 97 on (start of ascii alphabet) so will end up with a number in range of 97-122
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }
    
    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }
    
    function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    }
    
    //only want to use a specific range of characters
    function getRandomSymbol() {
        const symbols = "!@#$%^&*(){}[]=<>/,."
        return symbols[Math.floor(Math.random() * symbols.length)]
    }

    return (
        <div className="pg-container-big">
            <div className="pg-container">
                <h2 className="pg-h2">Password Generator</h2>

                <div className="pg-result-container">
                    <span className="pg-result" id="result">{password}</span>
                    <button className="pg-btn" id="clipboard" onClick={handleClickCopy}>
                        <FontAwesomeIcon icon={faClipboard} />
                    </button>
                </div>

                <div className="pg-settings">
                    <div className="pg-setting">
                        <label>Password Length</label>
                        <input type="number" id="length" min="4" max="20" value={length} onChange={handleLengthChange} />
                    </div>

                    <div className="pg-setting">
                        <label>Include Uppercase Letters</label>
                        <input type="checkbox" id="uppercase" checked={checkedUpper} onChange={() => setCheckedUpper(!checkedUpper)} />
                    </div>
                    <div className="pg-setting">
                        <label>Include Lowercase Letters</label>
                        <input type="checkbox" id="lowercase" checked={checkedLower} onChange={() => setCheckedLower(!checkedLower)} />
                    </div>
                    <div className="pg-setting">
                        <label>Include Number</label>
                        <input type="checkbox" id="numbers" checked={checkedNumber} onChange={() => setCheckedNumber(!checkedNumber)} />
                    </div>
                    <div className="pg-setting">
                        <label>Include Symbols</label>
                        <input type="checkbox" id="symbols" checked={checkedSymbol} onChange={() => setCheckedSymbol(!checkedSymbol)} />
                    </div>
                </div>

                <button className="pg-btn pg-btn-large" id="generate" onClick={handleClick}>Generate Password</button>
            </div>

            <HomeButton />
        </div>
    )
}

export default PasswordGenerator;