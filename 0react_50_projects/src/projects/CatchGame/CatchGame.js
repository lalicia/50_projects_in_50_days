import React from "react";
import {useState, useRef, useEffect} from "react";

import {nanoid} from "nanoid";

import "./CatchGame.css";
import HomeButton from "../../components/HomeButton.js";

function CatchGame() {
    const cakeRef = useRef();
    //console.log(cakeRef.current.src)
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
    const [rotate, setRotate] = useState();
    const [caughtId, setCaughtId] = useState();
    const [addSnacks, setAddSnacks] = useState(false);
    //console.log(selectedSnack)
    
    //WORKING - useEffect1, timer only
    useEffect(() => {
        let timer = null;
            if(screen3){
                timer = setInterval(increaseTime, 1000);
            }
        //console.log("useEffect1 (timer) ran")
        return () => {clearInterval(timer);};
    }, [screen3, seconds])

    function increaseTime() {
        let m = Math.floor(seconds / 60);
        let s = seconds % 60;
    
        m = m < 10 ? `0${m}` : m
        s = s < 10 ? `0${s}` : s
    
        setM(m);
        setS(s);
    
        setSeconds(seconds + 1)
    }

//**************************Don't touch above, timer is working */
    //for first snack onscreen
    useEffect(() => {
        const {xValue, yValue} = getRandomLocation();
        setX(xValue);
        setY(yValue);

        let snackOnScreen;
        setRotate(Math.random() * 360)
        if(screen3) {
            snackOnScreen = setTimeout(createSnack, 1000);
        }
        return () => clearTimeout(snackOnScreen)
    }, [screen3])

    function createSnack() {
        const {xValue, yValue} = getRandomLocation();
        setX(xValue);
        setY(yValue);
        //console.log("x, y", x, y)
        setRotate(Math.random() * 360);

        const newSnack = {
            id: nanoid(),
            src: selectedSnack.src,
            alt: selectedSnack.alt,
            x: x, 
            y: y, 
            rotate: rotate
        }

        setAllSnacks([...allSnacks, newSnack])
        //console.log(allSnacks)
        setSnack(true);
        //console.log("createSnack ran")
    }

    //WORKING
    function getRandomLocation() {
        const width = window.innerWidth;
        const height = window.innerHeight;
    
        const xValue = Math.floor(Math.random() * (width - 200) + 100);
        const yValue = Math.floor(Math.random() * (height - 200) + 100);
        
        return {xValue, yValue}
    }
    /********************************all above working***********/

    //WORKING
    function increaseScore() {
        setScore(score + 1)

        if(score >= 10) {
            setMsgVisible(true);
        }
    }

    //WORKING
    function catchSnack(id) {
        setCaughtId(id);
        const replacementSnacks = [...allSnacks.filter((snack) => snack !== id)]
        setAllSnacks(replacementSnacks)
        increaseScore();
        setTimeout(() => setAddSnacks(true), 500);
        //console.log("catchSnack ran")
    }

    //WORKING I think
    useEffect(() => {
        if(addSnacks) {
            makeSnacks();
        }
        setAddSnacks(false)
    }, [addSnacks])

    //not working perfectly - initially makes one snack...
    function makeSnacks() {
        setTimeout(createSnack, 500);
        setTimeout(createSnack, 1500);
    }
    
    
/*******************************************below appears ok */
    //WORKING
    function snackChosen(ref) {
        setAllSnacks([])
        setScreen3(true)
        setSrc(ref.current.src)
        setAlt(ref.current.alt)
        setSelectedSnack({src, alt});
    }

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
                        onClick={() => snackChosen(cakeRef)}>
                            <p>Cake</p>
                            <img ref={cakeRef} className="cg-img" src="https://pngimg.com/uploads/cake/small/cake_PNG97026.png" alt="cake" />
                        </button>
                    </li>

                    <li>
                        <button className="cg-choose-snack-btn"
                        onClick={() => snackChosen(iceCreamRef)}>
                            <p>Ice Cream</p>
                            <img ref={iceCreamRef} className="cg-img" src="https://pngimg.com/uploads/ice_cream/small/ice_cream_PNG98194.png" alt="ice cream" />
                        </button>
                    </li>

                    <li>
                        <button className="cg-choose-snack-btn"
                        onClick={() => snackChosen(friesRef)}>
                            <p>Fries</p>
                            <img ref={friesRef} className="cg-img" src="https://pngimg.com/uploads/fries/small/fries_PNG97885.png" alt="fries" />
                        </button>
                    </li>

                    <li>
                        <button className="cg-choose-snack-btn"
                        onClick={() => snackChosen(fruitRef)}>
                            <p>Fruit (?!)</p>
                            <img ref={fruitRef} className="cg-img" src="https://pngimg.com/uploads/strawberry/small/strawberry_PNG2611.png" alt="fruit" />
                        </button>
                    </li>
                </ul>
            </div>

            <div className="cg-screen cg-game-container" id="game-container">
                <h3 id="time" className="cg-time">Time: {m ? m : "--"}:{s ? s : "--"}</h3>
                <h3 id="score" className="cg-score">Score: {score}</h3>
                <h5 id="message" className={msgVisible ? "cg-message cg-visible" : "cg-message"}>Are you full yet? <br />
                If not just keep going, this whole game is kinda pointless</h5>

                {
                    snack ? 
                    allSnacks.map((snack) => {
                        {/* the top and left MUST be on div or aren't applied */}
                        return <div key={snack.id} id={snack.id}
                        style={{top: `${snack.y}px`, left: `${snack.x}px`}}
                        className={caughtId === snack.id ? "cg-snack cg-caught" : "cg-snack"}>
                            {/* for some reason though rotate will be applied either way, it's more stable here */}
                            <img className="cg-img" src={src} alt={alt} id={snack.id}
                            style={{transform: `rotate(${snack.rotate}deg)`}}
                            onClick={() => catchSnack(snack.id)} 
                            />
                    </div>})
                    : null
                }
                
            </div>

            <HomeButton />
        </div>
    )
}

export default CatchGame;