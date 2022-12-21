import React, { useEffect } from "react";
import {useState} from "react";

import "./ButtonRippleEffect.css";
import HomeButton from "../../components/HomeButton.js";

function ButtonRippleEffect() {
    const [active, setActive] = useState(false);
    const [coords, setCoords] = useState({x: -1, y: -1})

    //when coordinates change (dependancy state) active state triggered which is what the span depends on in the return
    useEffect(() => {
        if(coords.x !== -1 && coords.y !== -1) {
            setActive(true)
            setTimeout(() => setActive(false), 500)
        } else {
            setActive(false);
        }
    }, [coords])

    //makes button 'normal' with nothing going on, otherwise...actually nothing, it stops...commented out for now as unsure
    // useEffect(() => {
    //     if(!active) {
    //         setCoords({
    //             x: -1,
    //             y: -1
    //         })
    //     }
    // }, [active])
    
    //sets the coordinates of the click
    function handleClick(e) {
        setCoords({
            x: e.clientX - e.target.offsetLeft,
            y: e.clientY - e.target.offsetTop
        })
    }
       

    return (
        <div className="bre-container">
            <button className="bre-button" onClick={handleClick}>Click Me
                {
                  !active ? ""
                  : <span className="bre-circle" style={{top: `${coords.y}px`, left: `${coords.x}px`}}></span>  
                }
            </button>

            <HomeButton />
        </div>
    )
}

export default ButtonRippleEffect;