import React from "react";
import {useState, useEffect} from "react";

import "./LiveUserFilter.css";
import HomeButton from "../../components/HomeButton.js";

import List from "./List.js";
//import ListItem from "./List.js";

function LiveUserFilter() {
    const [userData, setUserData] = useState(null);
    const [searchterm, setSearchterm] = useState("")

    const API_URL = "https://randomuser.me/api?results=50";

    useEffect(() => {
        getData(API_URL);
        console.log("getData ran")

        async function getData(url) {
            const res = await fetch(url);
            
            const data = await res.json();
            //console.log(data)
            const results = data.results;
        
            //Clear result container in UI before do anything
            setUserData(results)
        }  
    }, [])
    //console.log(userData)


    return (
        <div className="luf-big-container">
            <div className="luf-container">
                <header className="luf-header">
                    <h4 className="luf-title">Live User Filter</h4>
                    <small className="luf-subtitle">Search by Name and/or Location</small>
                    
                    <input type="text" id="filter" placeholder="Search"
                    onInput={(e) => setSearchterm(e.target.value)}
                    />

                </header>

                <ul id="result" className="luf-user-list">
    
                {
                    userData ? 
                    <List data={userData} searchterm={searchterm} />
                    : <li className="luf-loading">
                        <h3>Loading...</h3>
                    </li>
                }
                    
                </ul>
                

            </div>

            <HomeButton />
        </div>
    )
}

export default LiveUserFilter;





//this works of a fashion - badly - will only keep included in userData state so everyone else is deleted, so when you backspace you have no more data coming backfaceVisibility:     function filterData(searchterm) {
    //     let includes = []
    //     //console.log(searchterm)
    //     userData.forEach(user => {
    //         if(user.name.first.toLowerCase().includes(searchterm.toLowerCase())
    //         || user.name.last.toLowerCase().includes(searchterm.toLowerCase())
    //         || user.location.city.toLowerCase().includes(searchterm.toLowerCase())
    //         || user.location.country.toLowerCase().includes(searchterm.toLowerCase())
    //         ) {
    //             includes.push(user)
    //             setUserData(includes) 
    //         } 
    //     })
    // }