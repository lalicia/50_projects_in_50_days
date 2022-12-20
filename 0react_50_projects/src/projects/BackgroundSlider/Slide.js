import React from "react";

import "./BackgroundSlider.css";

function Slide({slideImg}) {


    return (
        
        <div className="bs-slide bs-active" 
            style={{backgroundImage: `url(${slideImg})`}}>
        </div>
            
               
    )
}

export default Slide;