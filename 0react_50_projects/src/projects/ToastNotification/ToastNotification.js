import React, { useEffect } from "react";
import {useState} from "react";

import "./ToastNotification.css";
import HomeButton from "../../components/HomeButton.js";
import Notification from "./Notification.js";

function ToastNotification() {
    const [notifs, setNotifs] = useState([]);
    const [removing, setRemoving] = useState();

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

    useEffect(() => {
        if(removing) {
            setNotifs(n => n.filter(_n => _n.key !== removing));
        }
        //console.log("removing notif notifs: ", notifs)
    }, [removing])

    useEffect(() => {
        if(notifs.length) {
            const id = notifs[notifs.length -1].key;
            setTimeout(() => setRemoving(id), 3000)
        }
        //console.log("setTimeout notifs: ", notifs)
    }, [notifs])

    function createNotification(message = null, type = null) {
        // was originally doing key={notifs.length} but as this was changing it was becoming unstable with the remove, as keys were being duplicated
        setNotifs([...notifs, <Notification key={Math.floor(Math.random() * 10000000)} getRandomMessage={getRandomMessage} getRandomType={getRandomType} />])

        //DOES NOT WORK LIKE THIS - unless Notification is created as above, the map changes the toasts on each rander, so the list is unstable
        // setNotifs([...notifs, {
        //     id: notifs.length,
        //     type: null,
        //     message: null,
        // }])
    }
    //console.log("createNotification notifs: ", notifs)

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

                {/* NEITHER OF THE BELOW WORK - THE LIST BECOMES UNSTABLE AND ALTERS ON RENDER, SO DOESN'T KEEP THE MESSAGES AS ISSUED */}
                {/* {notifs.map((notif) => <Notification notifs={notifs} getRandomMessage={getRandomMessage} getRandomType={getRandomType} />
                )} */}
                {/* <Notification notifs={notifs} getRandomMessage={getRandomMessage} getRandomType={getRandomType} /> */}
            </div>

            {/* to do a specific message could do this and add param to function, and a type to change the color
            // button.addEventListener("click", () => createNotification("This is invalid data", "success")); */}
            <button className="tn-btn" id="button" onClick={createNotification}>Show Notification</button>

            <HomeButton />
        </div>
    )
}

export default ToastNotification;