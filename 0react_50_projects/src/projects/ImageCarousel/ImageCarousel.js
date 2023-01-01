import React, { useEffect } from "react";
import {useState} from "react";

import "./ImageCarousel.css";
import HomeButton from "../../components/HomeButton.js";

function ImageCarousel() {
    const [index, setIndex] = useState(0);
    const [xOffset, setXOffset] = useState(0);

    const images = [
        {
            id: 1, 
            link: "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            alt: "fairy toadstool"
        },
        {
            id: 2, 
            link: "https://images.unsplash.com/photo-1470328358326-dee4879da669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            alt: "girl in a white dress in a forest"
        },
        {
            id: 3, 
            link: "https://images.unsplash.com/photo-1572291449561-68d2169ac963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80",
            alt: "wolf staring at you from the forest"
        },
        {
            id: 4, 
            link: "https://images.unsplash.com/photo-1549696504-d2aec6b214f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
            alt: "castle in the snowy mountains"
        }
    ]

    //AUTOMATED CAROUSEL
    let interval;
    useEffect(() => {
        interval = setInterval(run, 2000);

        return () => clearInterval(interval)
    }, [index])

    function run() {
        setIndex(index + 1)
        //don't think below is required as being called in second useEffect
        // changeImage()
    }


    //this works for manual carousel - ALSO required for automated, doesn't work right without because tested to see if could remove
    useEffect(() => {
        changeImage();
    }, [index])


    //this is working fine with manual, all slides in order correctly both ways
    function changeImage() {
        if(index > images.length - 1) {
            setIndex(0);
        } else if(index < 0) {
            setIndex(images.length - 1);
        }

        setXOffset(index * 31.25)
    }


    //MANUAL CHANGING - all works correctly
    function resetInterval() {
        clearInterval(interval);
    }

    function handleNext() {
        console.log("clicked next")
        const newIndex = index + 1;
        setIndex(newIndex);
        //this bit is for automated - if just manual don't need
        resetInterval();
    }

    function handlePrev() {
        console.log("clicked prev")
        const newIndex = index - 1;
        setIndex(newIndex);
        //this bit is for automated - if just manual don't need
        resetInterval();
    }

    return (
        <div className="imgc-container">
            <div className="imgc-carousel">
                <div className="imgc-image-container" id="imgs" style={{transform: `translateX(-${xOffset}rem)`}}>
                    {
                        images.map((img) => {
                            return <img className="imgc-img" key={img.id} src={img.link} alt={img.alt} />
                        })
                    }
                </div>

                <div className="imgc-buttons-container">
                    <button id="left" className="imgc-btn" onClick={handlePrev}>Prev</button>
                    <button id="right" className="imgc-btn" onClick={handleNext}>Next</button>
                </div>

            </div>


            <HomeButton />
        </div>
    )
}

export default ImageCarousel;