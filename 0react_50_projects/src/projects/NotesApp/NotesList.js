import React from "react";

import "./NotesApp.css";
import Note from "./Note.js";

function NotesList({notes, handleDeleteNote, handleEdit, editable}) {

    return (
        <>
            {
                notes.map((note) => {
                    return (
                        <Note id={note.id} 
                    text={note.text} 
                    handleDeleteNote={handleDeleteNote} 
                    editable={editable} 
                    handleEdit={handleEdit} 
                    loadState={note.loadState} />
                    )
                })    
            }
        </>
    )
}

export default NotesList;