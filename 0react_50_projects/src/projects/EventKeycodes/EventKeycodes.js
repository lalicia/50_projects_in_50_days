import React from "react";
import {useState, useEffect} from "react";

import "./EventKeycodes.css";
import HomeButton from "../../components/HomeButton.js";

function EventKeycodes() {
    const [key, setKey] = useState("");
    const [keyCode, setKeyCode] = useState("");
    const [code, setCode] = useState("");

    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            console.log(event);
            setKey(event.key);
            setKeyCode(event.keyCode);
            setCode(event.code)
        })
    },[])

    return (
        <div className="ek-container">
            <div id="insert">

                <div className={key !== "" ? "ek-key" : "ek-key-invisible"}>
                    {key === " " ? "Space" : key}
                    <small>event.key</small>
                </div>

                <div className={keyCode !== "" ? "ek-key" : "ek-key-invisible"}>
                    {keyCode}
                    <small>event.keycode</small>
                </div>

                <div className={code !== "" ? "ek-key" : "ek-key-invisible"}>
                    {code}
                    <small>event.code</small>
                </div>


                <div className={key !== "" ? "ek-key-invisible" : "ek-key"}>
                    Press any key to get the keyCode
                </div>
            </div>

            <HomeButton />
        </div>
    )
}

export default EventKeycodes;