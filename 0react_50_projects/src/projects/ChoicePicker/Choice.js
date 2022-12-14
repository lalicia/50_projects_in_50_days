import React from "react";

import "./ChoicePicker.css";

function Choice({tag, highlight}) {
    
    console.log(tag)

    return (
            tag.map((tag) => {
                return <span className={highlight ? "cp-tag cp-highlight" : "cp-tag"}>{tag}</span>
            })
    )
    
}  

export default Choice;