import React from "react";
import {useState, useRef} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import "./DoubleVerticalSlider.css";
import HomeButton from "../../components/HomeButton.js";

import ImgSlide from "./ImgSlide.js";
import TextSlide from "./TextSlide.js";

function DoubleVerticalSlider() {
    const slideLeftRef = useRef();
    const slideRightRef = useRef();
    const sliderContainerRef = useRef();
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [sliderHeight, setSliderHeight] = useState(sliderContainerRef.clientHeight)

    const textInfo = [
        {
            title: "Pretty Flower",
            blurb: "all in pink",
            style: "#fd3555"
        },
        {
            title: "Blue Sky",
            blurb: "with its mountains",
            style: "#2ab6ba"
        },
        {
            title: "Lonely Castle",
            blurb: "in the wilderness",
            style: "#252e33"
        },
        {
            title: "Desert Landscape",
            blurb: "drink the sky",
            style: "#ffb866"
        }
    ]

    const imageInfo = [
        {
            imgLink: "https://images.unsplash.com/photo-1586442886903-1cb792cd1dc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
        },
        {
            imgLink: "https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        },
        {
            imgLink: "https://images.unsplash.com/photo-1521911494023-701af6c9579c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1237&q=80"
        },
        {
            imgLink: "https://images.unsplash.com/photo-1618174168866-c66b9d68e983?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        }
    ]


    const changeSlide = (direction) => {
        setSliderHeight(slideRightRef.current.clientHeight);

        if(direction === "up") {
            setActiveSlideIndex(activeSlideIndex + 1)

            if(activeSlideIndex > imageInfo.length - 2) {
                setActiveSlideIndex(0);
            }
        } else if(direction === "down") {
            setActiveSlideIndex(activeSlideIndex - 1)

            if(activeSlideIndex < 1) {
                setActiveSlideIndex(imageInfo.length - 1);
            }
        }

        //console.log("clicked")
    }



    return(
        <div className="dvs-container">
            <div className="dvs-slider-container" ref={sliderContainerRef}>
                <div className="dvs-left-slide" ref={slideLeftRef} style={{top: `-${(imageInfo.length - 1) * 100}vh`, transform: `translateY(${activeSlideIndex * sliderHeight}px)`}}>
                    {
                        textInfo.map((slide, index) => {
                            return <TextSlide key={index} title={slide.title} blurb={slide.blurb} style={slide.style}/>
                        })
                    }
                </div>

                <div className="dvs-right-slide" ref={slideRightRef} style={{transform: `translateY(-${activeSlideIndex * sliderHeight}px)`}}>
                    {/* images in this div are reverse order of the above slider */}
                    {
                        imageInfo.map((image, index) => {
                            return <ImgSlide key={index} imgLink={image.imgLink} />
                        })
                    }    
                </div>

                <div className="dvs-action-buttons">
                    <button className="dvs-down-button" onClick={() => changeSlide("down")}>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>

                    <button className="dvs-up-button" onClick={() => changeSlide("up")}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                </div>
            </div>
            <HomeButton />
        </div>
    )
}

export default DoubleVerticalSlider;