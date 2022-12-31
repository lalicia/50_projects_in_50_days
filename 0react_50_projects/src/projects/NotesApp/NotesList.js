import React from "react";

import "./NotesApp.css";
import Note from "./Note.js";

function NotesList({notes, handleDeleteNote, handleEdit, editable, handleInput}) {

    return (
        <>
            {
                notes.map((note) => {
                    return (
                        <Note key={note.id}
                        id={note.id} 
                        text={note.text} 
                        handleDeleteNote={handleDeleteNote} 
                        editable={editable} 
                        handleEdit={handleEdit} 
                        loadState={note.loadState}
                        handleInput={handleInput} />
                    )
                })    
            }
        </>
    )
}

export default NotesList;