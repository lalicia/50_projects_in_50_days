import React from "react";
import {useState, useEffect} from "react";

import "./DrinkWater.css";
import HomeButton from "../../components/HomeButton.js";

// function DrinkWater() {
    const [drank1, setDrank1] = useState(false);
    const [drank2, setDrank2] = useState(false);
    const [drank3, setDrank3] = useState(false);
    const [drank4, setDrank4] = useState(false);
    const [drank5, setDrank5] = useState(false);
    const [drank6, setDrank6] = useState(false);
    const [drank7, setDrank7] = useState(false);
    const [drank8, setDrank8] = useState(false);

    const [percentage, setPercentage] = useState("");
    const[percentageHidden, setPercentageHidden] = useState(true);
    const[one, setOne] = useState(false);
    const[two, setTwo] = useState(false);
    const[three, setThree] = useState(false);
    const[four, setFour] = useState(false);
    const[five, setFive] = useState(false);
    const[six, setSix] = useState(false);
    const[seven, setSeven] = useState(false);
    const[full, setFull] = useState(false);

    function handleClick1() {
        setDrank1(!drank1);
        setPercentageHidden(!percentageHidden);
        setOne(!one);
        setPercentage(`${1 / 8 * 100}%`)
    }

    function handleClick2() {
        if (drank1 === false) {setDrank1(true)}
        setDrank2(!drank2)
        setOne(!one);
        setTwo(!two);
        setPercentage(!two ? `${2 / 8 * 100}%` : `${1 / 8 * 100}%`)
    }

    function handleClick3() {
        if (drank1 === false) {setDrank1(true)}
        if (drank2 === false) {setDrank2(true)}
        setDrank3(!drank3)
    }

    function handleClick4() {
        if (drank1 === false) {setDrank1(true)}
        if (drank2 === false) {setDrank2(true)}
        if (drank3 === false) {setDrank3(true)}
        setDrank4(!drank4)
    }

    function handleClick5() {
        if (drank1 === false) {setDrank1(true)}
        if (drank2 === false) {setDrank2(true)}
        if (drank3 === false) {setDrank3(true)}
        if (drank4 === false) {setDrank4(true)}
        setDrank5(!drank5)
    }

    function handleClick6() {
        if (drank1 === false) {setDrank1(true)}
        if (drank2 === false) {setDrank2(true)}
        if (drank3 === false) {setDrank3(true)}
        if (drank4 === false) {setDrank4(true)}
        if (drank5 === false) {setDrank5(true)}
        setDrank6(!drank6)
    }

    function handleClick7() {
        if (drank1 === false) {setDrank1(true)}
        if (drank2 === false) {setDrank2(true)}
        if (drank3 === false) {setDrank3(true)}
        if (drank4 === false) {setDrank4(true)}
        if (drank5 === false) {setDrank5(true)}
        if (drank6 === false) {setDrank6(true)}
        setDrank7(!drank7)
    }

    function handleClick8() {
        if (drank1 === false) {setDrank1(true)}
        if (drank2 === false) {setDrank2(true)}
        if (drank3 === false) {setDrank3(true)}
        if (drank4 === false) {setDrank4(true)}
        if (drank5 === false) {setDrank5(true)}
        if (drank6 === false) {setDrank6(true)}
        if (drank7 === false) {setDrank7(true)}
        setDrank8(!drank8)
    }

    // const smallCups = [1,2,3,4,5,6,7,8];

    // smallCups.map((cup) => {
    //     return <div className={!drank(cup) ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"}></div>
        
    //     {!drank1 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={() => setDrank1(!drank1)}>250 ml</div>
    // })


    // updateBigCup();

    // function updateBigCup() {

    //     const totalCups = 8;

    //     if (drank1 === false && drank2 === false && drank3 === false && drank4 === false && drank5 === false && drank6 === false && drank7 === false && drank8 ===false) {
    //         setPercentageHidden(true);
    //         setPercentage("");
    //     } 
    //     else if (drank1 === true && drank2 === false && drank3 === false && drank4 === false && drank5 === false && drank6 === false && drank7 === false && drank8 ===false) {
    //         setPercentageHidden(false);
    //         setOne(true);
    //         setPercentage(`${1 / totalCups * 100}%`)
    //     }
    //     else if (drank1 === true && drank2 === true && drank3 === false && drank4 === false && drank5 === false && drank6 === false && drank7 === false && drank8 ===false) {
    //         setTwo(true);
    //         setPercentage(`${2 / totalCups * 100}%`)
    //     }
    //     else if (drank1 === true && drank2 === true && drank3 === true && drank4 === false && drank5 === false && drank6 === false && drank7 === false && drank8 ===false) {
    //         setThree(true);
    //         setPercentage(`${3 / totalCups * 100}%`)
    //     }
    //     else if (drank1 === true && drank2 === true && drank3 === true && drank4 === true && drank5 === false && drank6 === false && drank7 === false && drank8 ===false) {
    //         setFour(true);
    //         setPercentage(`${4 / totalCups * 100}%`)
    //     }

    //     // if (fullCups === totalCups) {
    //     //     remained.style.visibility = "hidden";
    //     //     remained.style.height = 0;
    //     // } else {
    //     //     remained.style.visibility = "visible";
    //     //     litres.innerText = `${2 - (250 * fullCups / 1000)}L`
    //     // }
    // }

    return (
        <div className="dw-container">
            <h1 className="dw-h1">Drink Water</h1>
            <h3 className="dw-h3">Goal: 2 Litres</h3>

            <div className="dw-cup">
                <div className="dw-remained" id="remained">
                    <span className="dw-span" id="litres"></span>
                    <small>Remained</small>
                </div>

                <div className={
                    percentageHidden ? "dw-percentage-hidden"
                    : one ? "dw-percentage dw-percentage-one"
                    : two ? "dw-percentage dw-percentage-two"
                    : three ? "dw-percentage dw-percentage-three"
                    : four ? "dw-percentage dw-percentage-four"
                    : five ? "dw-percentage dw-percentage-five"
                    : six ? "dw-percentage dw-percentage-six"
                    : seven ? "dw-percentage dw-percentage-seven"
                    : "dw-percentage dw-percentage-full"} id="percentage">{percentage}</div>
            </div>

            <p className="dw-text">Select how many glasses of water you've had</p>

            <div className="dw-cups">
                <div className={!drank1 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick1}>1<br></br><br></br>250 ml</div>
                <div className={!drank2 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick2}>2<br></br><br></br>250 ml</div>
                <div className={!drank3 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick3}>3<br></br><br></br>250 ml</div>
                <div className={!drank4 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick4}>4<br></br><br></br>250 ml</div>
                <div className={!drank5 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick5}>5<br></br><br></br>250 ml</div>
                <div className={!drank6 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick6}>6<br></br><br></br>250 ml</div>
                <div className={!drank7 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick7}>7<br></br><br></br>250 ml</div>
                <div className={!drank8 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick8}>8<br></br><br></br>250 ml</div>
            </div>

            <HomeButton />
        </div>
    )
}

// export default DrinkWater;