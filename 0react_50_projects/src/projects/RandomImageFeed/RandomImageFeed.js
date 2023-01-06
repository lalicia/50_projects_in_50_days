import React from "react";
import {useState, useEffect} from "react";

import "./RandomImageFeed.css";
import HomeButton from "../../components/HomeButton.js";

function RandomImageFeed() {
    const [images, setImages] = useState(null);

    useEffect(() => {
        const unsplashURL = "https://source.unsplash.com/random/"
        const rows = 5;
        let array = [];

        //cannot set directly to images state, need to use array for interim in for loop
        for(let i = 0; i < rows * 3; i++) {
            array.push({
                id: array.length + 1,
                src: `${unsplashURL}${getRandomSize()}?sig=${Math.random()}`
            })
        }
        setImages(array);
    }, [])
    //console.log(images)

    function getRandomSize() {
        return `${getRandomNumber()}x${getRandomNumber()}`
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * 10) + 300
    }

    return (
        <div className="rif-big-container">
            <h1 className="rif-title">Random Image Feed</h1>

            <div className="rif-container">

                {
                    images && images.length === 15 ? 
                    images.map((image) => {
                        return <img key={image.id} src={image.src} alt="random" />
                    })
                    :
                    <h1 className="rif-title">Loading...</h1>
                }

            </div>

            <HomeButton />
        </div>
    )
}

export default RandomImageFeed;