import React from "react";
import {useState} from "react";

import "./Hoverboard.css";
import HomeButton from "../../components/HomeButton.js";

function Hoverboard() {
    const colors = ["#6632a8", "#6ff55b", "#e5e82c", "#d656b2", "#295e96"];
    const [color, setColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

    //to make the squares
    const SQUARES = 500;
    let theSquares = [];

    for(let i = 0; i < SQUARES; i++) {
        theSquares.push({
            id: i,
            className: "hboard-square",
        })
        console.log("squares created")
    }

    return (
        <div className="hboard-big-container">
            <div className="hboard-container" id="container">

                {
                    theSquares.map((square) => {
                        return (
                            <div key={square.id} className="hboard-square"
                            onMouseEnter={(e) => {
                                setColor("#1d1d1d")
                                e.target.style.backgroundColor = color
                                e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
                                console.log(e.target)
                                }} 
                            onMouseLeave={(e) => {
                                setColor(colors[Math.floor(Math.random() * colors.length)])
                                e.target.style.backgroundColor = color
                                e.target.style.boxShadow = `0 0 2px black`
                                console.log(e.target)
                            }}
 
                            ></div>
                        )
                    })
                }

            </div>

            <HomeButton />
        </div>
    )
}

export default Hoverboard;


                           // style={{backgroundColor: color, 
                            // boxShadow: dim ? `0 0 2px black`
                            // : `0 0 2px ${color}, 0 0 10px ${color}`}}