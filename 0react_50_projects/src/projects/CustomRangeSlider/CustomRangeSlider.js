import React from "react";
import {useState, useRef} from "react";

import "./CustomRangeSlider.css";
import HomeButton from "../../components/HomeButton.js";

function CustomRangeSlider() {
    const labelRef = useRef();

    const [value, setValue] = useState(50);
    const [left, setLeft] = useState(110);

    function handleInput(e) {
        setValue(+e.target.value);

        const label = labelRef.current
        
        //get widths of the range and the label - these in px values
        const range_width = getComputedStyle(e.target).getPropertyValue("width");  
        const label_width = getComputedStyle(label).getPropertyValue("width");
        //console.log(range_width, label_width) //have to move it to see
        
        //to remove the px
        const num_width = +range_width.substring(0, range_width.length - 2)
        const num_label_width = +label_width.substring(0, label_width.length - 2)
    
        //min and max set on the input in return
        const max = +e.target.max;
        const min = +e.target.min;
    
        const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);
    
        setLeft(left);
    }
    
    //stackoverflow function
    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

    return (
        <div className="crs-container">
            <h2 className="crs-h2">Custom Range Slider</h2>

            <div className="crs-range-container">
                <input type="range" className="crs-input" id="range" min="0" max="100" 
                onInput={(e) => handleInput(e)}    
                />
                <label htmlFor="range" className="crs-range-label" 
                style={{left: `${left}px`}}
                ref={labelRef}>{value}</label>
            </div>

            <HomeButton />
        </div>
    )
}

export default CustomRangeSlider;