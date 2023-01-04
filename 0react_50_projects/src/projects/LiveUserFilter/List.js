import React from "react";

import "./LiveUserFilter.css";

import ListItem from "./List.js";

function List({data}) {
    console.log("this is data List is getting: ",data)


    return (
        <ul id="result" className="luf-user-list">
                    
            {
                data.map((user) => {
                    return <ListItem 
                key={user.index}
                firstName={user.name.first} 
                lastName={user.name.last}
                locationCity={user.location.city}
                locationCountry={user.location.country}
                userImg={user.picture.large}
                 />
                } )
            }
            

            <li className="luf-loading">
                <h3>Loading...</h3>
            </li>
        </ul>

    )
}

export default List;