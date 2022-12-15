import React from "react";
import {useState} from "react";

import "./AnimatedNavigation.css";
import HomeButton from "../../components/HomeButton.js";

function AnimatedNavigation() {
    const [active, setActive] = useState(true);

    return (
        <div className="an-container">
            <nav className={active ? "an-nav an-active" : "an-nav"}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <button className="an-icon an-toggle" onClick={() => setActive(!active)}>
                    <div className="an-line an-line1"></div>
                    <div className="an-line an-line2"></div>
                </button>
            </nav>

            <HomeButton />
        </div>
        
    )
}

export default AnimatedNavigation;