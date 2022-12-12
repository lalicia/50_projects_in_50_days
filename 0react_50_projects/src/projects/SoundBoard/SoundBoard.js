import React from "react";
import {useRef} from "react";

import "./SoundBoard.css";
import applauseSound from "./applause.mp3";
// import boo from "./boo.mp3";
// import gasp from "./gasp.mp3";
// import tada from "./tada.mp3";
// import victory from "./victory.mp3";
// import wrong from "./wrong.mp3";

function SoundBoard() {
    // const sounds = ["applause", "boo", "gasp", "tada",  "victory", "wrong"];

    // const songs = [
    //     {id: 1, name: "applause", sound: {applause}}, 
    //     // {id: 2, name: "boo", sound: {boo}}, 
    //     // {id: 3, name: "gasp", sound: {gasp}}, 
    //     // {id: 4, name: "tada", sound: {tada}}, 
    //     // {id: 5, name: "victory", sound: {victory}}, 
    //     // {id: 6, name: "wrong", sound: {wrong}}]
    // ]

    // let soundApplause = new Audio("./applause.mp3");
    // function handleClick() {
    //     // stopSongs();
    //     soundApplause.play();
    //     console.log("click");
    // }

    const audioRef = useRef();

    function handleClick() {
        const playPromise = audioRef.current.play() 
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log("PLAY")
          }).catch(error => console.log(error))
        }
      }


    //this is fine - generates buttons
    // let array = sounds.map((sound) => 
    //     <button className="sb-btn" onClick={handleClick}>{sound}</button>
    // )


    // function stopSongs(songs) {
    //     for (let i = 0; i < songs; i++) {
    //         songs[i].sound.pause();
    //         songs[i].sound.currentTime = 0;
    //     }
    // }

    return (
        <div className="sb-container">
            <div id="buttons">
                {/* {array} */}
                <audio id="applause" src={applauseSound} ref={audioRef}></audio>
                <button className="sb-btn" onClick={handleClick}></button>
            </div>
        </div>
    )
}

export default SoundBoard;