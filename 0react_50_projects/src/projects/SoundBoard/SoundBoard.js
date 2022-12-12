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

    const applauseRef = useRef();
    const booRef = useRef();
    const gaspRef = useRef();
    const tadaRef = useRef();
    const victoryRef = useRef();
    const wrongRef = useRef();

    function play(playPromise) {
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log("PLAY")
        }).catch(error => console.log(error))
      }
    }

    function handleApplauseClick() {
        stopSongs();
        const playPromise = applauseRef.current.play() 
        play(playPromise);
      }

      function handleVictoryClick() {
        stopSongs();
        const playPromise = victoryRef.current.play() 
        play(playPromise);
      }

      function handleWrongClick() {
        stopSongs();
        const playPromise = wrongRef.current.play() 
        play(playPromise);
      }

      function handleBooClick() {
        stopSongs();
        const playPromise = booRef.current.play() 
        play(playPromise);
      }

      function handleGaspClick() {
        stopSongs();
        const playPromise = gaspRef.current.play() 
        play(playPromise);
      }

      function handleTadaClick() {
        stopSongs();
        const playPromise = tadaRef.current.play() 
        play(playPromise);
      }

    function stopSongs() {
      applauseRef.current.pause();
      applauseRef.current.currentTime = 0;
      booRef.current.pause();
      booRef.current.currentTime = 0;
      gaspRef.current.pause();
      gaspRef.current.currentTime = 0;
      tadaRef.current.pause();
      tadaRef.current.currentTime = 0;
      victoryRef.current.pause();
      victoryRef.current.currentTime = 0;
      wrongRef.current.pause();
      wrongRef.current.currentTime = 0;
    }

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