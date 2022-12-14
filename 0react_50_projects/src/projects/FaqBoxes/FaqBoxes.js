import React from "react";
import {useState} from "react";

import "./FaqBoxes.css"
import Faq from "./Faq.js";

import HomeButton from "../../components/HomeButton.js";

function FaqBoxes() {
    const [box1, setBox1] = useState(true);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);
    const [box5, setBox5] = useState(false);

    return (
        <div className="faq-container">
        {/* &nbsp; adding this can stop margin collapsing, but as causing a white bar at the bottom of the screen - replaced with overflow: auto in css*/}
            
            <h1 className="faq-h1">Frequently Asked Questions</h1>

            <div className="faq-small-container">
            
                <Faq title={"Why shouldn't we trust atoms?"} text={"They make up everything"} box={box1} setBox={setBox1} />
            
                <Faq title={"What do you call someone with no body and no nose?"} text={"Nobody knows."} box={box2} setBox={setBox2} />

                <Faq title={"What's the object-oriented way to become wealthy?"} text={"Inheritance."} box={box3} setBox={setBox3} />

                <Faq title={"How many tickles does it take to tickle an octopus?"} text={"Ten-tickles!"} box={box4} setBox={setBox4} />

                <Faq title={"What is: 1 + 1?"} text={"Depends on who are you asking."} box={box5} setBox={setBox5} />

            </div>
        
            <HomeButton />

        </div>
    )
}

export default FaqBoxes;