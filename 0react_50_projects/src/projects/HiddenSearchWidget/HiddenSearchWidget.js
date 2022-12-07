import React from "react";
import {useState, useRef} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "./HiddenSearchWidget.css";
import HomeButton from "../../components/HomeButton.js";

function HiddenSearchWidget() {
    const [active, setActive] = useState(false);
    //creating a reference to the input field - this is given in the <input> as ref={inputRef}
    const inputRef = useRef(null);

    function handleClick() {
        setActive(!active);
        //running focus method on the input
        inputRef.current.focus();
    }

    return (
        <div className="hsw-container">
            <div className={active === false ? "hsw-search" : "hsw-search active"}>
                <input type="text" className="hsw-input" placeholder="Search..." ref={inputRef} />
                <button className="hsw-btn" onClick={handleClick}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <HomeButton />
        </div>
        
    )
}

export default HiddenSearchWidget;