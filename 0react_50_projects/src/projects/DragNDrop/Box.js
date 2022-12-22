import React from "react";

import "./DragNDrop.css";

function Box({boxRef, hovered, setHovered, setFilled, filled, held, setHeld}) {


    return (
        // {/* pass each box functions to prevent defaults (which stop items being dropped etc), to change states for CSS and classes, and to determine whether box should show the image */}
        <div className={
            hovered !== boxRef ? "dnd-empty" : "dnd-hovered"} 
            ref={boxRef}
            onDragOver={(event) => event.preventDefault()}
            onDragEnter={(event) => {event.preventDefault(); setHovered(boxRef)}}
            onDragLeave={(event) => {event.preventDefault(); setHovered()}}
            onDrop={() => {setHovered(); setFilled(boxRef)}}
        >
            {/* if the boxRef is the filled state, the image will be rendered, otherwise nothing will show in the box */}
            {
                filled === boxRef ? 
                <div className={
                    !held ? "dnd-fill" : "dnd-fill dnd-hold"} draggable="true"
                    onDragStart={(event) => {setHeld(true)}} onDragEnd={(event) => {setHeld(false)}}
                ></div>
                :
                null
            }
        
        </div>
    )
}

export default Box;