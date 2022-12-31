import React from "react";
import {useState, useEffect} from "react";

import {nanoid} from "nanoid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./NotesApp.css";
import HomeButton from "../../components/HomeButton.js";
import NotesList from "./NotesList.js";

function NotesApp() {
    const [editable, setEditable] = useState(true);
    const [notes, setNotes] = useState(
        () => {
            return JSON.parse(localStorage.getItem("react-notes-app-data")) || []
          }
    )

    //save notes to localStorage
    useEffect(() => {
        localStorage.setItem(
            "react-notes-app-data", 
            JSON.stringify(notes)
        );
    }, [notes])
    console.log(notes)

    function handleAddNewNote(text = "") {
        setNotes([...notes, {
            id: nanoid(),
            text: "",
            loadState: !editable
            }
        ])
        console.log(notes)
    }
    
    function handleDeleteNote(id) {
        console.log("delete clicked")
        const newNotes = notes.filter((note) => note.id !== id)
        setNotes(newNotes)
    }
    
    function handleEdit(id) {
        console.log("edit clicked")
        const newNotes = [...notes]

        for(let i = 0; i < newNotes.length; i++) {
            if(id === newNotes[i].id) {
                newNotes[i].loadState = !newNotes[i].loadState
            }
        }
        setNotes(newNotes)   
    }

    //keeps updated text when edited
    function handleInput(e, id) {
        const {value} = e.target
        const newNotes = [...notes]

        for(let i = 0; i < newNotes.length; i++) {
            if(id === newNotes[i].id) {
                newNotes[i].text = value
            }
        }
        setNotes(newNotes)
    }
    

    return (
        <div className="na-container">
            <button className="na-add" id="add" onClick={handleAddNewNote}>
                <FontAwesomeIcon icon={faPlus} />
            </button>

            {
                notes ? 
                <NotesList notes={notes} 
                handleDeleteNote={handleDeleteNote} 
                editable={editable} 
                handleEdit={handleEdit}
                handleInput={handleInput} />
                :
                null
            }

            <HomeButton />
        </div>
    )
}

export default NotesApp;