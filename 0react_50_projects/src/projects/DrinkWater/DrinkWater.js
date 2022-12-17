import React from "react";
import {useState} from "react";

import "./DrinkWater.css";
import HomeButton from "../../components/HomeButton.js";

function DrinkWater() {
    const smallCups = {
        cup1: false, 
        cup2: false, 
        cup3: false, 
        cup4: false,
        cup5: false, 
        cup6: false, 
        cup7: false, 
        cup8: false
    };

    const [cups, setCups] = useState(smallCups);

    function handleClick() {
        setCups(cups => ({ ...smallCups, cup1: !cups.cup1 }))
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
                    cups.cup1 === false ? "dw-percentage-hidden"
                    : cups.cup1 ? "dw-percentage dw-percentage-one"
                    // : two ? "dw-percentage dw-percentage-two"
                    // : three ? "dw-percentage dw-percentage-three"
                    // : four ? "dw-percentage dw-percentage-four"
                    // : five ? "dw-percentage dw-percentage-five"
                    // : six ? "dw-percentage dw-percentage-six"
                    // : seven ? "dw-percentage dw-percentage-seven"
                    : "dw-percentage dw-percentage-full"
                    } 
                    id="percentage">
                    {/* {percentage} */}
                    
                </div>
            </div>

            <p className="dw-text">Select how many glasses of water you've had</p>

            <div className="dw-cups">
                <div className={!cups.cup1 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick}>1<br></br><br></br>250 ml</div>
                {/* <div className={!drank2 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick2}>2<br></br><br></br>250 ml</div>
                <div className={!drank3 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick3}>3<br></br><br></br>250 ml</div>
                <div className={!drank4 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick4}>4<br></br><br></br>250 ml</div>
                <div className={!drank5 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick5}>5<br></br><br></br>250 ml</div>
                <div className={!drank6 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick6}>6<br></br><br></br>250 ml</div>
                <div className={!drank7 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick7}>7<br></br><br></br>250 ml</div>
                <div className={!drank8 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick8}>8<br></br><br></br>250 ml</div> */}
            </div>

            <HomeButton />
        </div>
    )
}

export default DrinkWater;