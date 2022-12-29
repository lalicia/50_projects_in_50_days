import React from "react";
import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./DoubleClickHeart.css";
import HomeButton from "../../components/HomeButton.js";

function DoubleClickHeart() {
    const [hearted, setHearted] = useState(false);
    const [clickTime, setClickTime] = useState(0);
    const [timesClicked, setTimesClicked] = useState(0);
    const [heartTop, setHeartTop] = useState();
    const [heartLeft, setHeartLeft] = useState()


    function handleClick(e) {
        //this is instead of doing a straight dblClick event, which would be just fine
        if(clickTime === 0) {
            setClickTime(new Date().getTime())
        } else {
            if((new Date().getTime() - clickTime) < 800) {
                createHeart(e)
                setClickTime(0);
            } else {
                setClickTime(new Date().getTime())
            }
        }
    }

    const createHeart = (e) => {
        //coordinates within viewport
        const x = e.clientX
        const y = e.clientY

        //coordinates for image
        const leftOffset = e.target.offsetLeft
        const topOffset = e.target.offsetTop

        //coordinates of position of click within image
        const xInside = x - leftOffset
        const yInside = y - topOffset

        setHeartTop(yInside);
        setHeartLeft(xInside);

        setHearted(true);
        setTimesClicked(timesClicked + 1);

        //to remove so they don't all stack up in the code
        setTimeout(() => {
            setHearted(false) 
            setHeartTop();
            setHeartLeft();    
        }, 410)
    }

    return (
        <div className="dch-container">
            <h3 className="dch-h3">Double click on the image to <FontAwesomeIcon icon={faHeart} className="dch-fa-heart" /> it</h3>

            <small className="dch-small">You've liked it <span className="dch-times" id="times">{timesClicked}</span> times</small>

            <div className="dch-loveMe" onClick={handleClick}>
                {
                    hearted ? 
                    <FontAwesomeIcon icon={faHeart} className="dch-fa-heart" 
                    style={{top: `${heartTop}px`, left: `${heartLeft}px`}} />
                    :
                    null
                }
            </div>

            <HomeButton />
        </div>
    )
}

export default DoubleClickHeart;