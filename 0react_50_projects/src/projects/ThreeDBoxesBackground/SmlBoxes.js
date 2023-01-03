import React from "react";

import "./ThreeDBoxesBackground.css";
import {boxData} from "./boxData.js";

function SmallBoxes() {

    return(
        <>
            {
                boxData.map((box) => {
                    return <div key={box.id} 
                    className="tdbb-box" 
                    style={{backgroundPosition: box.position}} ></div>
                    })

            }
        </>
    )
}

export default SmallBoxes;