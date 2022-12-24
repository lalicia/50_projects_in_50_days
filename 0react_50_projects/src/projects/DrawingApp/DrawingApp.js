import React from "react";
import {useState, useRef, useEffect, useCallback} from "react";

import "./DrawingApp.css";
import HomeButton from "../../components/HomeButton.js";

function DrawingApp() {
    const [size, setSize] = useState(10);
    const [color, setColor] = useState("#000000");

    const [isPressed, setIsPressed] = useState(false);
    const [lastPosition, setPosition] = useState({x: 0, y: 0})

    const canvasRef = useRef(null);
    const ctx = useRef(null);

    const draw = useCallback((x, y) => {
        if(isPressed) {
            ctx.current.beginPath();
            ctx.current.strokeStyle = color;
            ctx.current.lineWidth = size;
            ctx.current.lineJoin = "round";
            ctx.current.moveTo(lastPosition.x, lastPosition.y);
            ctx.current.lineTo(x, y);
            ctx.current.closePath();
            ctx.current.stroke();
    
            setPosition({
                x,
                y
            })
        }
    }, [color, size, lastPosition, isPressed, setPosition])

    //this must be in useEffect - don't full understand why but outside it will cause an error that crashes the page, and every tutorial has it essentially like this
    useEffect(() => {
        if(canvasRef.current) {
            ctx.current = canvasRef.current.getContext("2d");
        }
    }, [])

    //we need to calculate x/y based on position of canvas vs position or document, hence the rect
    const onMouseDown = ((e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        setPosition({
            x: e.pageX - rect.left,
            y: e.pageY - rect.top
        })
        setIsPressed(true);
    })

    const onMouseUp = ((e) => {
        setIsPressed(false);
        setPosition({
            x: 0,
            y: 0
        })
    })

    //we need to calculate x/y based on position of canvas vs position or document, hence the rect
    const onMouseMove = ((e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        draw(e.pageX - rect.left, e.pageY - rect.top)
    })

    function handleClickIncrease() {
        setSize(size + 5)

        if(size > 50) {setSize(50)}
    }

    function handleClickDecrease() {
        setSize(size - 5)

        if(size < 5) {setSize(5)}
    }

    function handleChange(e) {
        setColor(e.target.value);
    }

    function handleClickClear() {
        ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
    }


    return (
        <div className="da-container">

            <canvas className="da-canvas" ref={canvasRef} id="canvas" width="500" height="500"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            ></canvas>

            <div className="da-toolbox">
                <button className="da-decrease" id="decrease" onClick={handleClickDecrease}>-</button>

                <span className="da-size" id="size">{size}</span>

                <button className="da-increase" id="increase" onClick={handleClickIncrease}>+</button>

                <input className="da-color" type="color" id="color" value={color} onChange={handleChange} />

                <button className="da-clear" id="clear" 
                onClick={handleClickClear}
                >X</button>
            </div>

            <HomeButton />
        </div>
    )
}

export default DrawingApp;

// const [isPressed, setIsPressed] = useState(false);
// const [color, setColor] = useState("black");
// const [x, setX] = useState(undefined);
// const [y, setY] = useState(undefined)

// const [x2, setX2] = useState(undefined);
// const [y2, setY2] = useState(undefined);

// const canvasRef = useRef(null);
// //const ctx = canvasObj.getContext("2d");

// useEffect(() => {
//     const canvasObj = canvasRef.current;
//     const ctx = canvasObj.getContext("2d");

//     ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

//     drawCircle(ctx, x, y);
//     drawLine(ctx, x, y, x2, y2);
// },[drawCircle, drawLine])


// function onMouseDown(e) {
//     setIsPressed(true);
//     setX(e.offsetX);
//     setY(e.offsetY);
// }

// function onMouseUp(e) {
//     setIsPressed(false);
//     setX(undefined);
//     setY(undefined);
// }

// function onMouseMove(e) {
//     if(isPressed) {
//         //taking current positions as move
//         setX2(e.offsetX);
//         setY2(e.offsetY);

//         //drawing circle and line at same line to draw with solid lines
//         drawCircle(x2, y2);
//         drawLine(x, y, x2, y2);

//         //setting x and y here as move to stop weird line fill effect
//         setX(x2);
//         setY(y2);
//     }
// }


// //these two functions are what the pen draws with simultaneously
// //MDN Canvas docs on drawing shapes
// function drawCircle(ctx,x, y) {
//     ctx.beginPath();
//     ctx.arc(x, y, size, 0, Math.PI * 2, true);
//     ctx.fillStyle = color;
//     ctx.fill();
// }

// //takes in move from/to, and line from/to
// function drawLine(ctx, x1, y1, x2, y2) {
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.strokeStyle = color;
//     //this makes line width same as circle radius
//     ctx.lineWidth = size * 2;
//     ctx.stroke();
// }


// function handleClickIncrease() {
//     setSize(size + 5)

//     if(size > 50) {
//         setSize(50)
//     }
// }

// function handleClickDecrease() {
//     setSize(size - 5)

//     if(size < 5) {
//         setSize(5)
//     }
// }

// function handleChange(e) {
//     setColor(e.target.value);
// }

// // function handleClickClear(ctx) {
// //     ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
// // }