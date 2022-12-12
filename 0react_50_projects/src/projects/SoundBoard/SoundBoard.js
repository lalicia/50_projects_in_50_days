import React from "react";
import {useRef} from "react";

import "./SoundBoard.css";
import applauseSound from "./applause.mp3";
import booSound from "./boo.mp3";
import gaspSound from "./gasp.mp3";
import tadaSound from "./tada.mp3";
import victorySound from "./victory.mp3";
import wrongSound from "./wrong.mp3";

function SoundBoard() {
    // const sounds = ["applause", "boo", "gasp", "tada",  "victory", "wrong"];

    //this is fine - generates buttons
    // let array = sounds.map((sound) => 
    //     <button className="sb-btn" onClick={handleClick}>{sound}</button>
    // )

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

    const applauseRef = useRef();
    const booRef = useRef();
    const gaspRef = useRef();
    const tadaRef = useRef();
    const victoryRef = useRef();
    const wrongRef = useRef();

    function handleApplauseClick() {
        // stopSongs();
        const playPromise = applauseRef.current.play() 
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log("PLAY")
          }).catch(error => console.log(error))
        }
      }

      function handleVictoryClick() {
        // stopSongs();
        const playPromise = victoryRef.current.play() 
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log("PLAY")
          }).catch(error => console.log(error))
        }
      }

      function handleWrongClick() {
        // stopSongs();
        const playPromise = wrongRef.current.play() 
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log("PLAY")
          }).catch(error => console.log(error))
        }
      }

      function handleBooClick() {
        // stopSongs();
        const playPromise = booRef.current.play() 
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log("PLAY")
          }).catch(error => console.log(error))
        }
      }

      function handleGaspClick() {
        // stopSongs();
        const playPromise = gaspRef.current.play() 
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log("PLAY")
          }).catch(error => console.log(error))
        }
      }

      function handleTadaClick() {
        // stopSongs();
        const playPromise = tadaRef.current.play() 
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log("PLAY")
          }).catch(error => console.log(error))
        }
      }

    // function stopSongs() {
    //     if ()
    // }

    return (
        <div className="sb-container">
            <div id="buttons">
                {/* {array} */}
                <audio id="applause" src={applauseSound} ref={applauseRef}></audio>
                <button className="sb-btn" onClick={handleApplauseClick}>applause</button>

                <audio id="boo" src={booSound} ref={booRef}></audio>
                <button className="sb-btn" onClick={handleBooClick}>boo</button>

                <audio id="gasp" src={gaspSound} ref={gaspRef}></audio>
                <button className="sb-btn" onClick={handleGaspClick}>gasp</button>

                <audio id="tada" src={tadaSound} ref={tadaRef}></audio>
                <button className="sb-btn" onClick={handleTadaClick}>tada</button>

                <audio id="victory" src={victorySound} ref={victoryRef}></audio>
                <button className="sb-btn" onClick={handleVictoryClick}>victory</button>

                <audio id="wrong" src={wrongSound} ref={wrongRef}></audio>
                <button className="sb-btn" onClick={handleWrongClick}>wrong</button>
            </div>
        </div>
    )
}

export default SoundBoard;