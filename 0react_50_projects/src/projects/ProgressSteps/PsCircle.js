import React from "react";

import "./ProgressSteps.css";

function PsCircle({classname, children}) {

    return (
        <div className={classname}>{children}</div>
    )
}

export default PsCircle;