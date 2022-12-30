import React from "react";

import "./GoodCheapFastCheckboxes.css";

function Toggle({optionId, optionName, checked, onChange}) {

    return (
        <div className="gcfc-toggle-container">
            <input type="checkbox" id={optionId} className="gcfc-toggle" checked={checked} onChange={onChange} />
            
            <label htmlFor={optionId} className="gcfc-label">
                <div className="gcfc-ball"></div>
            </label>
            
            <span>{optionName}</span>
        </div>
    )
}

export default Toggle;