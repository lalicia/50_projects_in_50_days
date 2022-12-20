import React, { useEffect } from "react";
import {useState} from "react";

import "./BackgroundSlider.css";
import HomeButton from "../../components/HomeButton.js";
import Slide from "./Slide.js";

import diagon from "./diagon.jpg";
import hogwarts from "./hogwarts.jpg";
import platform from "./platform.jpg";
import marauders from "./marauders.jpg";
import train from "./hogwartsexpress.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BackgroundSlider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [bgImg, setBgImg] = useState(platform);

    const slideImg = [
        platform, train, hogwarts, marauders, diagon
    ]

    useEffect(() => {
        setBgToBody();
    })

    function handleClickRight() {
        console.log("right click")
        // setActiveSlide(activeSlide + 1);

        if(activeSlide > (slideImg.length - 2)) {
            setActiveSlide(0)
        } else {
            setActiveSlide(activeSlide + 1);
        }

        setBgToBody();
    }

    function handleClickLeft() {
        console.log("left click")
        // setActiveSlide(activeSlide - 1);
        
        if(activeSlide === 0) {
            setActiveSlide(slideImg.length - 1);
        } else {
            setActiveSlide(activeSlide - 1);
        }

        setBgToBody();
    }

    function setBgToBody() {
        setBgImg(slideImg[activeSlide]);
        console.log(slideImg[activeSlide]);
    }


    return (
        <div className="bs-container" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="bs-slider-container">
                {/* {
                    slideImg.map((image) => {
                        <Slide slideImg={image} />
                    })
                } */}
                <Slide slideImg={slideImg[activeSlide]} />
            
                <button className="bs-arrow bs-left-arrow" id="left" onClick={handleClickLeft}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                <button className="bs-arrow bs-right-arrow" id="right" onClick={handleClickRight}>
                <FontAwesomeIcon icon={faArrowRight} />
                </button>

            </div>

            <HomeButton />
        </div>
        
    )
}

export default BackgroundSlider;