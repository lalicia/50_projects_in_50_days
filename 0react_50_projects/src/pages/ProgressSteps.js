import React from "react";
import {useState, useEffect} from "react";

import "./ProgressSteps.css";
import PsCircle from "../components/PsCircle.js";

function ProgressSteps() {
    const [circle, setCircle] = useState(4);
    const [active, setActive] = useState(0);
    const [barWidth, setBarWidth] = useState(0);

    useEffect(() => {
        setBarWidth(100 / (circle - 1) * active);
    }, [circle, active]);

    const arr = [];
    for (let i = 0; i < circle; i++) {
        arr.push(<PsCircle classname={i <= active ? "ps-circle active" : "ps-circle"} key={i}>{i}</PsCircle>);
    }
    //console.log(arr)
    console.log(active);

    return (
        <div className="ps-container">
            <div className="ps-progress-container">
                <div className="ps-progress" id="progress" style={{width: barWidth + "%"}}></div>
                
                {arr}
            </div>

            <div className="ps-buttons">
                <button className="ps-btn" id="prev" disabled={active > 0 ? false : true} onClick={() => {active <= 0 ? setActive(0) : setActive(active - 1)}}>Prev</button>
                
                <button className="ps-btn" id="next" disabled={active >= circle - 1 ? true : false} onClick={() => {active >= circle ? setActive(circle) : setActive(active + 1)}}>Next</button>
            </div>
            
        </div>
    )
}

export default ProgressSteps;