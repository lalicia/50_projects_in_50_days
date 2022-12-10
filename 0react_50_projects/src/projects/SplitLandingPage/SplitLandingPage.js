import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

import "./SplitLandingPage.css";
import HomeButton from "../../components/HomeButton.js";

function SplitLandingPage() {
    const [activeLeft, setActiveLeft] = useState(false);
    const [activeRight, setActiveRight] = useState(false);

    //these functions handed to onMouseEnter in the div - no onMouseExit needed as covered with the two states being set in each function
    function handleLeftToggle() {
        setActiveLeft(true);
        setActiveRight(false);
    }

    function handleRightToggle() {
        setActiveLeft(false);
        setActiveRight(true);
    }

    //this one needed to make them go back to 50/50 when cursor not on page at all (ie in address bar)
    function handleNeither() {
        setActiveLeft(false);
        setActiveRight(false);
    }

    return (
        <div onMouseLeave={handleNeither} className="slp-container">
            <div className={
                activeLeft ? "slp-small-container slp-hover-left"
                :
                activeRight ? "slp-small-container slp-hover-right" 
                : "slp-small-container"} >
                <div onMouseEnter={handleLeftToggle} className="slp-split slp-left">
                    <h1 className="slp-h1">Playstation 5</h1>
                    <Link to="#"><button className="slp-btn">Buy Now</button></Link>
                </div>
                <div onMouseEnter={handleRightToggle}className="slp-split slp-right">
                    <h1 className="slp-h1">X-Box Series X</h1>
                    <Link to="#"><button className="slp-btn">Buy Now</button></Link>
                </div>
            </div>
            <HomeButton />
        </div>
    )
}

export default SplitLandingPage;