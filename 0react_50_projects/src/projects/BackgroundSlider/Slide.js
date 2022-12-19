import React from "react";
import {useState} from "react";

import "./BackgroundSlider.css";

function Slide({slideImg}) {


    return (
        
        <div className="slide active" 
            style={{backgroundImage: `url(${slideImg})`}}>
        </div>
            
               
    )
}

export default Slide;