import React from "react";
import {useState} from "react";

import "./DragNDrop.css";
import HomeButton from "../../components/HomeButton.js";

function DragNDrop() {
    const [held, setHeld] = useState(false);

 

    return (
        <div className="dnd-container">
            <div className="dnd-empty">
                <div className={
                    !held ? "dnd-fill" : "dnd-fill dnd-hold"} draggable="true" 
                    onDragStart={(event) => {setHeld(true)}} onDragEnd={(event) => {setHeld(false)}}
                ></div>
            </div>
            <div className="dnd-empty"></div>
            <div className="dnd-empty"></div>
            <div className="dnd-empty"></div>
            <div className="dnd-empty"></div>
        </div>
    )
}

export default DragNDrop;