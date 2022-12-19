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

        if(activeSlide > (slideImg.length - 1)) {
            setActiveSlide(0)
        } else {
            setActiveSlide(activeSlide + 1);
        }

        setBgToBody();
        setCurrentSlide();
    }

    function handleClickLeft() {
        console.log("left click")
        // setActiveSlide(activeSlide - 1);
        
        if(activeSlide < 0) {
            setActiveSlide(slideImg.length - 1);
        } else {
            setActiveSlide(activeSlide - 1);
        }

        setBgToBody();
        setCurrentSlide();
    }

    function setBgToBody() {
        setBgImg(slideImg[activeSlide]);
    }

    function setCurrentSlide() {
        // slides.forEach(slide => {
        //     slide.classList.remove("active");
        // })

        // slides[activeSlide].classList.add("active");
    }


    return (
        <div className="bs-container" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="bs-slider-container">
                {
                    slideImg.map((image) => {
                        <Slide slideImg={image} />
                    })
                }
            
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