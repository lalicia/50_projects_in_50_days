import React, { useEffect } from "react";
import {useState, useRef} from "react";

import "./BlurryLoading.css";


function BlurryLoading() {
    const [count, setCount] = useState(0);
    const savedCallback = useRef();

    function callback() {
        if (count < 100) {
            setCount(count + 1);
        }
    }

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
        savedCallback.current();
        }

        let id = setInterval(tick, 30);
        return () => clearInterval(id);
    }, []);

    // // const bg  = document.querySelector(".bg");

   
        
    //     //we need to map one range of numbers to another
    //     // percentage.style.opacity = scale(load, 0, 100, 1, 0);
    //     // bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    

    //from stackoverflow
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    return (
        <div className="bl-container">
            <section className="bl-bg"></section>
            <div className="bl-loading-text">{count}%</div>
        </div>
    )
}

export default BlurryLoading;