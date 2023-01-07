import React, { useEffect } from "react";
import {useState} from "react";

import "./BackgroundSlider.css";
import HomeButton from "../../components/HomeButton.js";
import Slide from "./Slide.js";

// import diagon from "./diagon.jpg";
// import hogwarts from "./hogwarts.jpg";
// import platform from "./platform.jpg";
// import marauders from "./marauders.jpg";
// import train from "./hogwartsexpress.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BackgroundSlider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [bgImg, setBgImg] = useState(`url("https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`);

    // const slideImg = [
    //     platform, train, hogwarts, marauders, diagon
    // ]
    const slideImg = [
        `url("https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`, `url("https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1816&q=80")`, `url("https://images.unsplash.com/photo-1618944914141-cc5e785592ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`, `url("https://images.unsplash.com/photo-1654344009476-09872e6243a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`, `url("https://images.unsplash.com/photo-1618944616545-1aac141d8d5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80")`
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
        <div className="bs-container" style={{backgroundImage: `${bgImg}`}}>
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