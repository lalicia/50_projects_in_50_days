import React from "react";
import {useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./NotesApp.css";

function Note({id, text, handleDeleteNote, loadState, handleEdit, handleInput}) {

    //console.log(loadState)

    return (
        <div className="na-note">
            <div className="na-tools">
                <button className="na-edit" onClick={() => handleEdit(id)}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="na-delete" onClick={() => handleDeleteNote(id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>

            <div 
            className={loadState ? "na-main" : " na-main na-hidden"}
            >{text}</div>
            <textarea 
            className={loadState ? "na-hidden" : ""} 
            onInput={(e) => handleInput(e, id)} 
            spellCheck="false" maxLength="200" value={text}></textarea>
        </div>
    )
}

export default Note;





















//PRIOR TO REFACTORING WITH TUTORIAL
// import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit } from "@fortawesome/free-solid-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

// import "./NotesApp.css";

// function Note({id, hidden, onEdit, onDelete, onInput, displayText}) {



//     return (
//         <div className="na-note">
//             <div className="na-tools">
//                 <button className="na-edit" onClick={onEdit}>
//                     <FontAwesomeIcon icon={faEdit} />
//                 </button>
//                 <button className="na-delete" onClick={onDelete}>
//                     <FontAwesomeIcon icon={faTrash} />
//                 </button>
//             </div>

//             <div className={hidden ? "na-main" : " na-main na-hidden"}>{displayText}</div>
//             <textarea className={hidden ? "na-hidden" : ""} onInput={onInput} spellCheck="false" maxLength="200"/>
//         </div>
//     )
// }

// export default Note;