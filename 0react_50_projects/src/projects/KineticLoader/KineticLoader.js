import React from "react";

import "./KineticLoader.css";
import HomeButton from "../../components/HomeButton.js";

function KineticLoader() {


    return (
        <div className="kl-container">
            <div className="kl-kinetic"></div>

            <HomeButton />
        </div>
    )
}

export default KineticLoader;