import React from "react";

import "./LiveUserFilter.css";

import ListItem from "./ListItem.js";

function List({data, searchterm}) {
    console.log("this is data List is getting: ", data)

    return (
            data.filter((user) => {
                return (
                    user.name.first.toLowerCase().includes(searchterm.toLowerCase())
                    || user.name.last.toLowerCase().includes(searchterm.toLowerCase())
                    || user.location.city.toLowerCase().includes(searchterm.toLowerCase())
                    || user.location.country.toLowerCase().includes(searchterm.toLowerCase())
                )
            })
            .map((user, index) => {
                //console.log(index)
                return <ListItem 
                    key={index}
                    firstName={user.name.first} 
                    lastName={user.name.last}
                    locationCity={user.location.city}
                    locationCountry={user.location.country}
                    userImg={user.picture.large}
                    />
            })
    )
}

export default List;