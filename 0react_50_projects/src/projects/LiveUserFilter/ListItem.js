import React from "react";

import "./LiveUserFilter.css";

function ListItem({firstName, lastName, locationCity, locationCountry, userImg}) {


    return (
            <li>
                <img src={userImg} alt={firstName} />
                
                <div className="luf-user-info">
                    <h4 className="luf-user-name">{firstName} {lastName}</h4>
                    <p className="luf-user-location">{locationCity}, {locationCountry}</p>
                </div>
            </li>
    )
}

export default ListItem;