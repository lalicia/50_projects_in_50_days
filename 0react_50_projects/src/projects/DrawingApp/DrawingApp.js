import React from "react";
import {useState, useRef, useEffect} from "react";

import "./DrawingApp.css";
import HomeButton from "../../components/HomeButton.js";

function DrawingApp() {
    const [size, setSize] = useState(10);
    const [isPressed, setIsPressed] = useState(false);
    const [color, setColor] = useState("black");
    const [x, setX] = useState(undefined);
    const [y, setY] = useState(undefined)

    const [x2, setX2] = useState(undefined);
    const [y2, setY2] = useState(undefined);

    const canvasRef = useRef();
    let ctx;

    useEffect(() => {
        ctx = canvasRef.current.getContext("2d");
      }, []);

    function onMouseDown(e) {
        setIsPressed(true);
        setX(e.offsetX);
        setY(e.offsetY);
    }

    function onMouseUp(e) {
        setIsPressed(false);
        setX(undefined);
        setY(undefined);
    }

    function onMouseMove(e) {
        if(isPressed) {
            //taking current positions as move
            setX2(e.offsetX);
            setY2(e.offsetY);

            //drawing circle and line at same line to draw with solid lines
            drawCircle(x2, y2);
            drawLine(x, y, x2, y2);

            //setting x and y here as move to stop weird line fill effect
            setX(x2);
            setY(y2);
        }
    }


    //these two functions are what the pen draws with simultaneously
    //MDN Canvas docs on drawing shapes
    function drawCircle(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2, true);
        ctx.fillStyle = color;
        ctx.fill();
    }

    //takes in move from/to, and line from/to
    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        //this makes line width same as circle radius
        ctx.lineWidth = size * 2;
        ctx.stroke();
    }


    function handleClickIncrease() {
        setSize(size + 5)

        if(size > 50) {
            setSize(50)
        }
    }

    function handleClickDecrease() {
        setSize(size - 5)

        if(size < 5) {
            setSize(5)
        }
    }

    function handleChange(e) {
        setColor(e.target.value);
    }

    function handleClickClear() {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    return (
        <div className="da-container">

            <canvas className="da-canvas" ref={canvasRef} id="canvas" width="500" height="500"
            // onMouseDown={(e) => {
            //     setIsPressed(true);
            //     setX(e.offsetX);
            //     setY(e.offsetY);
            // }}
            // onMouseUp={(e) => {
            //     setIsPressed(false);
            //     setX(undefined);
            //     setY(undefined);
            // }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            ></canvas>

            <div className="da-toolbox">
                <button className="da-decrease" id="decrease" onClick={handleClickDecrease}>-</button>

                <span className="da-size" id="size">{size}</span>

                <button className="da-increase" id="increase" onClick={handleClickIncrease}>+</button>

                <input className="da-color" type="color" id="color" onChange={handleChange} />

                <button className="da-clear" id="clear" function={handleClickClear}>X</button>
            </div>

            <HomeButton />
        </div>
    )
}

export default DrawingApp;