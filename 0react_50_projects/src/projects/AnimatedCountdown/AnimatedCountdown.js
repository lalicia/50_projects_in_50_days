import React from "react";
import {useState, useEffect} from "react";

import "./AnimatedCountdown.css";
import HomeButton from "../../components/HomeButton.js";

function AnimatedCountdown() {
    const [zeroIn, setZeroIn] = useState(null);
    const [oneIn, setOneIn] = useState(null);
    const [twoIn, setTwoIn] = useState(null);
    const [threeIn, setThreeIn] = useState(true);
    const [zeroOut, setZeroOut] = useState(null);
    const [oneOut, setOneOut] = useState(null);
    const [twoOut, setTwoOut] = useState(null);
    const [threeOut, setThreeOut] = useState(null);
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        runAnimation();
    }, [])

    function runAnimation() {
        setTimeout(() => {
            setThreeIn(false);
            setThreeOut(true);
        }, 500)

        setTimeout(() => {
            setTwoIn(true);
        }, 1000)

        setTimeout(() => {
            setTwoIn(false);
            setTwoOut(true);
        }, 1500)

        setTimeout(() => {
            setOneIn(true);
        }, 2000)

        setTimeout(() => {
            setOneIn(false);
            setOneOut(true);
        }, 2500)

        setTimeout(() => {
            setZeroIn(true);
        }, 3000)

        setTimeout(() => {
            setZeroIn(false);
            setZeroOut(true);
        }, 3500)

        setTimeout(() => {
            setHide(true);
            setShow(true);
        }, 4000)
    }

    function handleReset() {
        setHide(false);
        setShow(false);

        setZeroIn(null);
        setOneIn(null);
        setTwoIn(null);
        setThreeIn(true);
        setZeroOut(null);
        setOneOut(null);
        setTwoOut(null);
        setThreeOut(null);
        
        runAnimation();
    }

    return (
        <div className="ac-container">
            <div className={!hide ? "ac-counter" : "ac-counter ac-hide"}>
                <div className="ac-nums">
                    <span className={threeIn ? "ac-in" 
                    : threeOut ? "ac-out"
                    : ""}>3</span>

                    <span className={twoIn ? "ac-in" 
                    : twoOut ? "ac-out"
                    : ""}>2</span>

                    <span className={oneIn ? "ac-in" 
                    : oneOut ? "ac-out"
                    : ""}>1</span>

                    <span className={zeroIn ? "ac-in" 
                    : zeroOut ? "ac-out"
                    : ""}>0</span>
                </div>

                <h4 className="ac-h4">Get Ready</h4>
            </div>

            <div className={!show ? "ac-final" : "ac-final ac-show"}>
                <h1 className="ac-h1">GO</h1>
                <button id="replay" className="ac-replay" onClick={handleReset}>Replay</button>
            </div>

            <HomeButton />
        </div>
    )
}

export default AnimatedCountdown;