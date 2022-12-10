import React from "react";
import {useState, useEffect, useRef} from "react";

import "./ScrollAnimation.css";
import HomeButton from "../../components/HomeButton.js";

import ContentBox from "./ContentBox.js";

function ScrollAnimation() {
    const [show, setShow] = useState(false);
    const [box, setBox] = useState(20);

    //making Content Boxes, rendered in return
    const arr = [];
    for (let i = 0; i < box; i++) {
        arr.push(<ContentBox key={i} />);
    }

    //going to look at Intersection Observer
        

    return (
        <div className="sa-container">
            <h1 className="sa-h1">Scroll to see the animation</h1>
            {arr}
        
            <HomeButton />
        </div>
    )
}

export default ScrollAnimation;