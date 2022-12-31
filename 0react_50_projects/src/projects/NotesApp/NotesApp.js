import React from "react";
import {useState, useEffect} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./NotesApp.css";
import HomeButton from "../../components/HomeButton.js";
import Note from "./Note.js";

function NotesApp() {
    const [addedNotes, setAddedNotes] = useState([]);
    const [displayText, setDisplayText] = useState("");
    const [hidden, setHidden] = useState(false);


    function addNewNote(text = "yo") {
        setAddedNotes([...addedNotes, 
            {
                id: addedNotes.length +1,
                hidden: text === "" ? true : false,
                displayText: text,
                onEdit: onEdit,
                onDelete: onDelete,
                onInput: onInput
            }
        ])
    
        function onDelete() {
            console.log("delete clicked")
            setAddedNotes([...addedNotes, ])
            // updateLS();
        }
    
        function onEdit() {
            console.log("edit clicked")
            setHidden(!hidden);
        }
    
        //keeps updated text when edited
        function onInput(e) {
            const {value} = e.target
            setDisplayText(value);
            // updateLS();
        }
    }

    return (
        <div className="na-container">
            <button className="na-add" id="add" onClick={() => addNewNote()}>
                <FontAwesomeIcon icon={faPlus} />
            </button>

            {addedNotes.map((note) => {
                return <Note key={note.id} displayText={note.displayText} onEdit={note.onEdit} onDelete={note.onDelete} onInput={note.onInput} />
            })}

            <HomeButton />
        </div>
    )
}

export default NotesApp;