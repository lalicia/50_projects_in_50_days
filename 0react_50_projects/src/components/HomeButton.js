import React from "react";
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function HomeButton() {

    return (
        <button className="home-btn">
            <Link to={"/"}>
                <FontAwesomeIcon icon={faHouse} />
            </Link>
        </button>
    )
}

export default HomeButton;