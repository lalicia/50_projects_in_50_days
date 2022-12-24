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

        if(size >= 50) {setSize(50)}
    }

    function handleClickDecrease() {
        setSize(size - 5)

        if(size <= 5) {setSize(5)}
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