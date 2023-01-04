import React from "react";
import {useState, useEffect} from "react";

import "./LiveUserFilter.css";
import HomeButton from "../../components/HomeButton.js";

import List from "./List.js";

function LiveUserFilter() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const res = await fetch("https://randomuser.me/api?results=50");
        //destructuring to get data.results
        const {results} = await res.json();
        //console.log(data)
    
        //Clear result container in UI before do anything
        setUserData(results)
    }    
    
    //console.log(userData)

    return (
        <div className="luf-big-container">
            <div className="luf-container">
                <header className="luf-header">
                    <h4 className="luf-title">Live User Filter</h4>
                    <small className="luf-subtitle">Search by Name and/or Location</small>
                    
                    <input type="text" id="filter" placeholder="Search" />

                </header>

                <List data={userData} />

            </div>

            <HomeButton />
        </div>
    )
}

export default LiveUserFilter;