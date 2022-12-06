import React from "react";
import {useState} from "react";

import "./RotatingNavigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function RotatingNavigation() {
    const [nav, setNav] = useState(false);

    function handleClick() {
        setNav(!nav);
    }

    return (
        <div className="rn-big-container">
            <div className={nav === false ? "rn-small-container" : "rn-small-container show-nav"}>
                <div className="rn-content">
                    <h1>Amazing Article</h1>
                    <small>@lalicia</small>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <h3>My Dog</h3>
                    <img src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="doggy" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <div className="rn-circle-container">
                <div className="rn-circle">
                    <button id="close" onClick={handleClick}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <button id="open" onClick={handleClick}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>

            <nav>
                <ul>
                    <li><FontAwesomeIcon icon={faHouse} /> Home</li>
                    <li><FontAwesomeIcon icon={faUser} /> About</li>
                    <li><FontAwesomeIcon icon={faEnvelope} /> Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default RotatingNavigation;