import React from "react";
import {useState} from "react";

import "./ThreeDBoxesBackground.css";
import HomeButton from "../../components/HomeButton.js";

import SmlBoxes from  "./SmlBoxes.js";

function ThreeDBoxesBackground() {
    const [split, setSplit] = useState(false);
    //console.log(big);

    function handleClick() {
        setSplit(!split)
    }

    return(
        <div className="tdbb-container">
            <button className="tdbb-magic" id="btn"
            onClick={handleClick}
            >✨Magic✨</button>

            <div id="boxes" 
            className={split ? "tdbb-boxes tdbb-big" : "tdbb-boxes"}>

                <SmlBoxes />

            </div>

            <HomeButton />
        </div>
    )
}

export default ThreeDBoxesBackground;