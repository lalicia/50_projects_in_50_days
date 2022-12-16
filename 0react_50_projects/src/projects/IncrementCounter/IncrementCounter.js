import React from "react";
import {useState, useEffect, useRef} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

import "./IncrementCounter.css";
import HomeButton from "../../components/HomeButton.js";

let timer;

function IncrementCounter() {
    const [twitterCount, setTwitterCount] = useState(0);
    const [youtubeCount, setYoutubeCount] = useState(0);
    const [facebookCount, setFacebookCount] = useState(0);

    const twitterRef = useRef(12000);
    const youtubeRef = useRef(5000);
    const facebookRef = useRef(7500);

    useEffect(() => {
        clearInterval(timer);

        const twitterIncrement = twitterRef.current / 200;
        const youtubeIncrement = youtubeRef.current / 200;
        const facebookIncrement = facebookRef.current / 200;

        timer = setInterval(() => {
   
           if (twitterCount < twitterRef.current) {
            setTwitterCount(Math.ceil(twitterCount + twitterIncrement))
           } else {
            setTwitterCount(twitterRef.current)
            clearInterval(timer)
              return
           }
           
            if (youtubeCount < youtubeRef.current) {
                setYoutubeCount(Math.ceil(youtubeCount + youtubeIncrement))
            } else {
                setYoutubeCount(youtubeRef.current)
                clearInterval(timer)
                return
            }

            if (facebookCount < facebookRef.current) {
                setFacebookCount(Math.ceil(facebookCount + facebookIncrement))
            } else {
                setFacebookCount(facebookRef.current)
                clearInterval(timer)
                return
            }
            
        }, 10)
       
        return () => clearInterval(timer)
    }, [twitterCount, youtubeCount, facebookCount])

    
    return (
        <div className="ic-container">
            <div className="ic-counter-container">
                <FontAwesomeIcon icon={faTwitter} size="3x" />
                <div className="ic-counter">{twitterCount}</div>
                <span>Twitter Followers</span>
            </div>

            <div className="ic-counter-container">
                <FontAwesomeIcon icon={faYoutube} size="3x" />
                <div className="ic-counter">{youtubeCount}</div>
                <span>YouTube Subscribers</span>
            </div>

            <div className="ic-counter-container">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
                <div className="ic-counter">{facebookCount}</div>
                <span>Facebook Fans</span>
            </div>

            <HomeButton />
        </div>
    )
}

export default IncrementCounter;