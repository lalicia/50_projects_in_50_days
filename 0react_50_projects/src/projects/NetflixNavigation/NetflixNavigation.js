import React from "react";
import {useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./NetflixNavigation.css";
import HomeButton from "../../components/HomeButton.js";

function NetflixNavigation() {
    //state set in onClicks
    const [visibleNav, setVisibleNav] = useState(false);

    return (
        <div className="nn-container">
            <button className="nn-nav-btn nn-open-btn"
            onClick={() => setVisibleNav(true)}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-450x121.png" alt="Logo" className="nn-logo" />

            <p className="nn-text">Mobile Navigation</p>

            <nav className={visibleNav ? 
            "nn-nav nn-nav-black nn-visible"
            : "nn-nav nn-nav-black"}>
                <nav className={visibleNav ? 
                "nn-nav nn-nav-red nn-visible"
                : "nn-nav nn-nav-red"}>
                    <nav className={visibleNav ? 
                    "nn-nav nn-nav-white nn-visible"
                    : "nn-nav nn-nav-white"}>
                        <button className="nn-nav-btn nn-close-btn"
                        onClick={() => setVisibleNav(false)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>

                        <img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-450x121.png" alt="Logo" className="nn-logo" />

                        <ul className="nn-list">
                            <li><a href="#">Teams</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Life at Netflix</a></li>
                            <li><ul>
                                <li><a href="#">Netflix Culture Memo</a></li>
                                <li><a href="#">Work Life Balance</a></li>
                                <li><a href="#">Inclusion and Diversity</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul></li>
                        </ul>
                    </nav>
                </nav>
            </nav>

            <HomeButton />
        </div>
    )
}

export default NetflixNavigation;