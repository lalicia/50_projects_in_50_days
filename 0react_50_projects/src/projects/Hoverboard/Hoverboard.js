import React, { useEffect } from "react";
import {useState} from "react";

import "./Hoverboard.css";
import HomeButton from "../../components/HomeButton.js";

//WORKING BUT LAGGED
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


//WORKING BUT LAGGED
// function Hoverboard() {
//     const colors = ["#6632a8", "#6ff55b", "#e5e82c", "#d656b2", "#295e96"];
//     const [color, setColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

//     //to make the squares
//     const SQUARES = 500;
//     let theSquares = [];

//     for(let i = 0; i < SQUARES; i++) {
//         theSquares.push({
//             id: i,
//             className: "hboard-square",
//         })
//         console.log("squares created")
//     }

//     return (
//         <div className="hboard-big-container">
//             <div className="hboard-container" id="container">

//                 {
//                     theSquares.map((square) => {
//                         return (
//                             <div key={square.id} className="hboard-square"
//                             onMouseEnter={(e) => {
//                                 setColor("#1d1d1d")
//                                 e.target.style.backgroundColor = color
//                                 e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
//                                 console.log(e.target)
//                                 }} 
//                             onMouseLeave={(e) => {
//                                 setColor(colors[Math.floor(Math.random() * colors.length)])
//                                 e.target.style.backgroundColor = color
//                                 e.target.style.boxShadow = `0 0 2px black`
//                                 console.log(e.target)
//                             }}
 
//                             ></div>
//                         )
//                     })
//                 }

//             </div>

//             <HomeButton />
//         </div>
//     )
// }

// export default Hoverboard;


// //NOT WORKING CORRECTLY OR AS WELL AS LAGGED
// function Hoverboard() {
//     const colors = ["#6632a8", "#6ff55b", "#e5e82c", "#d656b2", "#295e96"];
//     const [color, setColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

//     const [lit, setLit] = useState(false);
//     const [selected, setSelected] = useState();

//     //to make the squares
//     const SQUARES = 500;
//     let theSquares = [];

//     for(let i = 0; i < SQUARES; i++) {
//         theSquares.push({
//             id: i,
//             className: "hboard-square",
//             lit: lit,
//         })
//         console.log("squares created")
//     }

//     function handleMouseEnter(id) {
//         setColor(colors[Math.floor(Math.random() * colors.length)])
//         setSelected(id);
//         if(selected === id) {
            
//             setLit(true);
//         }
//     }

//     function handleMouseLeave(id) {
//         setColor("#1d1d1d")
//         setSelected();
//         if(selected !== id) {
//             setLit(false);
//         }
//     }

//     return (
//         <div className="hboard-big-container">
//             <div className="hboard-container" id="container">

//                 {
//                     theSquares.map((square) => {
//                         return (
//                             <div key={square.id} className="hboard-square"
//                             style={{backgroundColor: !square.lit && selected === square.id ? square.bgColor : color, boxShadow: !square.lit && selected === square.id ? square.boxShadow : `0 0 2px ${color}, 0 0 10px ${color}`}}
//                             onMouseEnter={() => {
//                                 handleMouseEnter(square.id)}} 
//                             onMouseLeave={(e) => {
//                                 handleMouseLeave()}}
//                             ></div>
//                         )
//                     })
//                 }

//             </div>

//             <HomeButton />
//         </div>
//     )
// }

// export default Hoverboard;