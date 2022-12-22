import React from "react";
import {useState, useRef} from "react";

import "./DragNDrop.css";
import HomeButton from "../../components/HomeButton.js";

function DragNDrop() {
    const boxRef1 = useRef();
    const boxRef2 = useRef();
    const boxRef3 = useRef();
    const boxRef4 = useRef();
    const boxRef5 = useRef();

    const [held, setHeld] = useState(false);
    const [hovered, setHovered] = useState();
    const [filled, setFilled] = useState(boxRef1);


    return (
        <div className="dnd-container">
            <div className={
                hovered !== boxRef1 ? "dnd-empty" : "dnd-hovered"} 
                ref={boxRef1}
                onDragOver={(event) => event.preventDefault()}
                onDragEnter={(event) => {event.preventDefault(); setHovered(boxRef1)}}
                onDragLeave={(event) => {event.preventDefault(); setHovered()}}
                onDrop={() => {setHovered(); setFilled(boxRef1)}}
                >
                {
                    filled === boxRef1 ? 
                    <div className={
                        !held ? "dnd-fill" : "dnd-fill dnd-hold"} draggable="true"
                        onDragStart={(event) => {setHeld(true)}} onDragEnd={(event) => {setHeld(false)}}
                    ></div>
                    :
                    null
                }
            </div>

            <div className={
                hovered !== boxRef2 ? "dnd-empty" : "dnd-hovered"}
                ref={boxRef2}
                onDragOver={(event) => event.preventDefault()}
                onDragEnter={(event) => {event.preventDefault(); setHovered(boxRef2)}}
                onDragLeave={(event) => {event.preventDefault(); setHovered()}}
                onDrop={() => {setHovered(); setFilled(boxRef2)}}
                >
                    {
                        filled === boxRef2 ? 
                        <div className={
                            !held ? "dnd-fill" : "dnd-fill dnd-hold"} draggable="true"
                            onDragStart={(event) => {setHeld(true)}} onDragEnd={(event) => {setHeld(false)}}
                        ></div>
                        :
                        null
                    }
                </div>

                <div className={
                hovered !== boxRef3 ? "dnd-empty" : "dnd-hovered"}
                ref={boxRef3}
                onDragOver={(event) => event.preventDefault()}
                onDragEnter={(event) => {event.preventDefault(); setHovered(boxRef3)}}
                onDragLeave={(event) => {event.preventDefault(); setHovered()}}
                onDrop={() => {setHovered(); setFilled(boxRef3)}}
                >
                    {
                        filled === boxRef3 ? 
                        <div className={
                            !held ? "dnd-fill" : "dnd-fill dnd-hold"} draggable="true"
                            onDragStart={(event) => {setHeld(true)}} onDragEnd={(event) => {setHeld(false)}}
                        ></div>
                        :
                        null
                    }
                </div>

                <div className={
                hovered !== boxRef4 ? "dnd-empty" : "dnd-hovered"}
                ref={boxRef4}
                onDragOver={(event) => event.preventDefault()}
                onDragEnter={(event) => {event.preventDefault(); setHovered(boxRef4)}}
                onDragLeave={(event) => {event.preventDefault(); setHovered()}}
                onDrop={() => {setHovered(); setFilled(boxRef4)}}
                >
                    {
                        filled === boxRef4 ? 
                        <div className={
                            !held ? "dnd-fill" : "dnd-fill dnd-hold"} draggable="true"
                            onDragStart={(event) => {setHeld(true)}} onDragEnd={(event) => {setHeld(false)}}
                        ></div>
                        :
                        null
                    }
                </div>

                <div className={
                hovered !== boxRef5 ? "dnd-empty" : "dnd-hovered"}
                ref={boxRef5}
                onDragOver={(event) => event.preventDefault()}
                onDragEnter={(event) => {event.preventDefault(); setHovered(boxRef5)}}
                onDragLeave={(event) => {event.preventDefault(); setHovered()}}
                onDrop={() => {setHovered(); setFilled(boxRef5)}}
                >
                    {
                        filled === boxRef5 ? 
                        <div className={
                            !held ? "dnd-fill" : "dnd-fill dnd-hold"} draggable="true"
                            onDragStart={(event) => {setHeld(true)}} onDragEnd={(event) => {setHeld(false)}}
                        ></div>
                        :
                        null
                    }
                </div>
            

            <HomeButton />
        </div>
    )
}

export default DragNDrop;