import React from "react";
import {useState, useRef} from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./FeedbackUIDesign.css";
import HomeButton from "../../components/HomeButton.js";

function FeedbackUIDesign() {
    const refUnhappy = useRef();
    const refNeutral = useRef();
    const refSatisfied = useRef();

    const [submitted, setSubmitted] = useState(false);
    const [selectedRating, setSelectedRating] = useState("");
    const [active, setActive] = useState(false);

    function handleClickUnhappy(e) {
        console.log(e.target)
        setActive(true);
        setSelectedRating("Unhappy")
    }

    function handleSubmit() {
        setSubmitted(true)
    }

    return (
        <div className="fuid-container">

            {
                !submitted ? 
                <div className="fuid-panel-container" id="panel">
                    <strong>How satisfied are you with our <br />
                    customer support performance?</strong>

                    <div className="fuid-ratings-container" >
                        <div className={active && selectedRating === "Unhappy" ? 
                        "fuid-rating fuid-active"
                        : "fuid-rating"}
                        ref={refUnhappy}>
                            <img src="https://cdn-icons-png.flaticon.com/512/187/187150.png" alt="unhappy face" 
                            onClick={(e) => handleClickUnhappy(e)}    
                            />
                            <small>Unhappy</small>
                        </div>

                        <div className="fuid-rating">
                            <img src="https://cdn-icons-png.flaticon.com/512/187/187136.png" alt="neutral face" />
                            <small>Neutral</small>
                        </div>

                        <div className="fuid-rating">
                            <img src="https://cdn-icons-png.flaticon.com/512/187/187133.png" alt="satisfied face" />
                            <small>Satisfied</small>
                        </div>
                    </div>

                    <button className="fuid-btn" id="send"
                    onClick={handleSubmit}
                    >Send Feedback</button>
                </div>
                :
                <div className="fuid-panel-container" id="panel">
                    <FontAwesomeIcon className="fuid-fa-heart" icon={faHeart} />
                    <strong>Thank you!</strong>
                    <br />
                    <strong>Feedback: {selectedRating}</strong>
                    <br />
                    <p>We'll use your feedback to improve our customer support</p>
                </div> 
            }

            <HomeButton />
        </div>
    )
}

export default FeedbackUIDesign;