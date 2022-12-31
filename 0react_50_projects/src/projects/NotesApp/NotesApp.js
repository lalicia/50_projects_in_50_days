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
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "Note 1",
            loadState: editable,
        },
        {
            id: nanoid(),
            text: "Note 2",
            loadState: editable,
        }
    ])

    useEffect(() => {
        
    }, [])

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
            // updateLS();
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
        // updateLS();
    }

    return (
        <div className="na-container">
            <button className="na-add" id="add" onClick={handleAddNewNote}>
                <FontAwesomeIcon icon={faPlus} />
            </button>

            <NotesList notes={notes} 
            handleDeleteNote={handleDeleteNote} 
            editable={editable} 
            handleEdit={handleEdit}
            handleInput={handleInput} />

            <HomeButton />
        </div>
    )
}

export default NotesApp;






// PRIOR TO REFACTORING WITH TUTORIAL
// import React from "react";
// import {useState, useEffect} from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";

// import "./NotesApp.css";
// import HomeButton from "../../components/HomeButton.js";
// import Note from "./Note.js";

// function NotesApp() {
//     const [addedNotes, setAddedNotes] = useState([]);
//     const [displayText, setDisplayText] = useState("");
//     const [hidden, setHidden] = useState(false);


//     function addNewNote(text = "yo") {
//         setAddedNotes([...addedNotes, 
//             {
//                 id: addedNotes.length +1,
//                 hidden: text === "" ? true : false,
//                 displayText: text,
//                 onEdit: onEdit,
//                 onDelete: onDelete,
//                 onInput: onInput
//             }
//         ])
    
//         function onDelete() {
//             console.log("delete clicked")
//             setAddedNotes([...addedNotes, ])
//             // updateLS();
//         }
    
//         function onEdit() {
//             console.log("edit clicked")
//             setHidden(!hidden);
//         }
    
//         //keeps updated text when edited
//         function onInput(e) {
//             const {value} = e.target
//             setDisplayText(value);
//             // updateLS();
//         }
//     }

//     return (
//         <div className="na-container">
//             <button className="na-add" id="add" onClick={() => addNewNote()}>
//                 <FontAwesomeIcon icon={faPlus} />
//             </button>

//             {addedNotes.map((note) => {
//                 return <Note key={note.id} displayText={note.displayText} onEdit={note.onEdit} onDelete={note.onDelete} onInput={note.onInput} />
//             })}

//             <HomeButton />
//         </div>
//     )
// }

// export default NotesApp;