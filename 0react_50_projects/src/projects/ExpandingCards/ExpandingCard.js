import React from "react";

import "./ExpandingCards.css";

function ExpandingCard({title, url, id, active, onPanelClick}) {

    return (
        <div className={active === true ? "ec-panel active" : "ec-panel"} style={{backgroundImage: `url(${url}`}} 
        onClick={() => onPanelClick(id)} >
            <h3>{title}</h3>
        </div>
    )
}

export default ExpandingCard;