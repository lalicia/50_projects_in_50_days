import React from "react";

import "./DoubleVerticalSlider.css";

function TextSlide({style, title, blurb}) {


    return(
        <div style={{backgroundColor: style}}>
                <h1>{title}</h1>
                <p>{blurb}</p>
        </div>
    )
}

export default TextSlide;