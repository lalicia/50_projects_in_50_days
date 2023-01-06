import React from "react";
import {useState, useRef, useEffect} from "react";

import {nanoid} from "nanoid";

import "./CatchGame.css";
import HomeButton from "../../components/HomeButton.js";

function CatchGame() {
    const cakeRef = useRef();
    const iceCreamRef = useRef();
    const friesRef = useRef();
    const fruitRef = useRef();

    const [score, setScore] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [s, setS] = useState();
    const [m, setM] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [screen2, setScreen2] = useState(false);
    const [screen3, setScreen3] = useState(false);
    const [src, setSrc] = useState("");
    const [alt, setAlt] = useState("");
    const [selectedSnack, setSelectedSnack] = useState({src, alt});
    const [snack, setSnack] = useState(false);
    const [msgVisible, setMsgVisible] = useState(false);
    const [allSnacks, setAllSnacks] = useState([]);
    const [caughtId, setCaughtId] = useState();

    //console.log(cakeRef.current.src)
    
    //useEffect1
    useEffect(() => {
        let interval = setInterval(increaseTime, 1000);

        console.log("useEffect1 ran")
        return () => clearInterval(interval)
    }, [screen3, seconds])
    //console.log(selectedSnack)

    function increaseTime() {
        let m = Math.floor(seconds / 60);
        let s = seconds % 60;
    
        m = m < 10 ? `0${m}` : m
        s = s < 10 ? `0${s}` : s
    
        setM(m);
        setS(s);
    
        setSeconds(seconds + 1)
    }

    
    //useEffect2
    useEffect(() => {
        function createSnack() {
            const {x, y} = getRandomLocation();
        
            setX(x);
            setY(y);

            setAllSnacks([{
                id: nanoid(),
                src: selectedSnack.src,
                alt: selectedSnack.alt,
            }])

            setSnack(true);
            console.log("createSnack ran")
        }
        setTimeout(createSnack, 1000);
        console.log("useEffect2 ran")
    }, [selectedSnack])

    function getRandomLocation() {
        const width = window.innerWidth;
        const height = window.innerHeight;
    
        const x = Math.random() * (width - 200) + 100;
        const y = Math.random() * (height - 200) + 100;
    
        console.log("getRandomLocation ran")
        return {x, y}
    }

    function increaseScore() {
        setScore(score + 1)
        if(score > 19) {
            setMsgVisible(true);
        }
        console.log("increase score ran")
    }

    function catchSnack(id) {
        increaseScore();
        //adds class to the element clicked
        setCaughtId(id);
        setTimeout(() => {
            setAllSnacks([...allSnacks.filter((snack) => snack !== id)])
        }, 2000)
        console.log("catchSnack ran")
    }
    
    //useEffect3
    useEffect(() => {
        addSnacks();

        function addSnacks() {
            function createSnack() {
                const {x, y} = getRandomLocation();
            
                setX(x);
                setY(y);
    
                setAllSnacks([{
                    id: nanoid(),
                    src: selectedSnack.src,
                    alt: selectedSnack.alt,
                }])
    
                setSnack(true);
                console.log("createSnack ran")
            }
        
            function getRandomLocation() {
                const width = window.innerWidth;
                const height = window.innerHeight;
            
                const x = Math.random() * (width - 200) + 100;
                const y = Math.random() * (height - 200) + 100;
            
                //console.log("getRandomLocation ran")
                return {x, y}
            }
    
            setTimeout(createSnack, 1000);
            setTimeout(createSnack, 1500);
        }
        console.log("useEffect3 ran")
    }, [score])
    


    return (
        <div className="cg-container">
            <div className={screen2 ? "cg-screen cg-up" : "cg-screen"}>
                <h1 className="cg-h1">Catch the Snack</h1>
                <button className="cg-btn" id="start-btn"
                onClick={() => setScreen2(true)}
                >Play Game</button>
            </div>

            <div className={screen3 ? "cg-screen cg-up" : "cg-screen"}>
                <h1 className="cg-h1">What's your favourite snack?</h1>
                <ul className="cg-snacks-list">
                    <li>
                        <button className="cg-choose-snack-btn"
                        onClick={() => {
                            setScreen3(true)
                            setSrc(cakeRef.current.src)
                            setAlt(cakeRef.current.alt)
                            setSelectedSnack({src, alt});
                            }}>
                            <p>Cake</p>
                            <img ref={cakeRef} className="cg-img" src="https://pngimg.com/uploads/cake/small/cake_PNG97026.png" alt="cake" />
                        </button>
                    </li>

                    <li>
                        <button className="cg-choose-snack-btn"
                        onClick={() => setScreen3(true)}>
                            <p>Ice Cream</p>
                            <img className="cg-img" src="https://pngimg.com/uploads/ice_cream/small/ice_cream_PNG98194.png" alt="ice cream" />
                        </button>
                    </li>

                    <li>
                        <button className="cg-choose-snack-btn"
                        onClick={() => setScreen3(true)}>
                            <p>Fries</p>
                            <img className="cg-img" src="https://pngimg.com/uploads/fries/small/fries_PNG97885.png" alt="fries" />
                        </button>
                    </li>

                    <li>
                        <button className="cg-choose-snack-btn"
                        onClick={() => setScreen3(true)}>
                            <p>Fruit (?!)</p>
                            <img className="cg-img" src="https://pngimg.com/uploads/strawberry/small/strawberry_PNG2611.png" alt="fruit" />
                        </button>
                    </li>
                </ul>
            </div>

            <div className="cg-screen cg-game-container" id="game-container">
                <h3 id="time" className="cg-time">Time: {m}:{s}</h3>
                <h3 id="score" className="cg-score">Score: {score}</h3>
                <h5 id="message" className={msgVisible ? "cg-message cg-visible" : "cg-message"}>Are you full yet? <br />
                If not just keep going, this whole game is kinda pointless</h5>

                {
                    snack ? 
                    allSnacks.map((snack) => {
                        return <div id={snack.id} className={caughtId === snack.id ? "cg-snack cg-caught" : "cg-snack"}>
                            <img className="cg-img" src={src} alt={alt}
                            style={{top: `${y}px`, left: `${x}px`, transform: `rotate(${Math.random() * 360}deg)`}}
                            onClick={() => catchSnack(snack.id)} 
                            />
                    </div>})
                    : null
                }
                
                {/* <!-- temporary -->
                <div className="snack">
                    <img className="cg-img" src="https://pngimg.com/uploads/fries/small/fries_PNG97885.png" alt="fries" />
                </div> */}
            </div>

            <HomeButton />
        </div>
    )
}

export default CatchGame;