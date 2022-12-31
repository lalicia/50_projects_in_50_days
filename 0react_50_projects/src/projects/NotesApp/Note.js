import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./NotesApp.css";

function Note({id, hidden, onEdit, onDelete, onInput, displayText}) {



    return (
        <div className="na-note">
            <div className="na-tools">
                <button className="na-edit" onClick={onEdit}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="na-delete" onClick={onDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>

            <div className={hidden ? "na-main" : " na-main na-hidden"}>{displayText}</div>
            <textarea className={hidden ? "na-hidden" : ""} onInput={onInput} spellCheck="false"/>
        </div>
    )
}

export default Note;