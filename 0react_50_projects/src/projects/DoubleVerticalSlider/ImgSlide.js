import React from "react";

import "./DoubleVerticalSlider.css";

function ImgSlide({imgLink}) {

    return(
        <div style={{backgroundImage: `url(${imgLink})`}}></div>
    )
}

export default ImgSlide;