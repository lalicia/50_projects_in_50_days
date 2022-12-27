import React, { useEffect } from "react";
import {useState} from "react";

import "./ToastNotification.css";
import HomeButton from "../../components/HomeButton.js";
import Notification from "./Notification.js";

function ToastNotification() {
    const [notifs, setNotifs] = useState([]);

    const messages = [
        "Nice butt!",
        "Your hair looks nice today",
        "You're so smart :)",
        "Treat yo'self, it's snack time"
    ]
    
    const types = [
        "info",
        "success",
        "error"
    ]

    function createNotification(message = null, type = null) {
        setNotifs([...notifs, <Notification getRandomMessage={getRandomMessage} getRandomType={getRandomType} />])

        // setNotifs([...notifs, {
        //     type: null,
        //     message: null,
        // }])
    }
    console.log(notifs)

    function getRandomMessage() {
        return messages[Math.floor(Math.random() * messages.length)]
    }

    //to change msg color
    function getRandomType() {
        return types[Math.floor(Math.random() * types.length)]
    }

    return (
        <div className="tn-container">
            <div className="tn-toasts" id="toasts">
                {
                    notifs !== [] ? 
                    notifs
                    :
                    null
                }
                {/* <Notification notifs={notifs} getRandomMessage={getRandomMessage} getRandomType={getRandomType} /> */}
            </div>

            {/* //to do a specific message could do this and add param to function, and a type to change the color
            // button.addEventListener("click", () => createNotification("This is invalid data", "success")); */}
            <button className="tn-btn" id="button" onClick={createNotification}>Show Notification</button>

            <HomeButton />
        </div>
    )
}

export default ToastNotification;