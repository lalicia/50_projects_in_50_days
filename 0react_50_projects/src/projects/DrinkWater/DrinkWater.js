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
    const [percentage, setPercentage] = useState("");
    const [litres, setLitres] = useState(2);

    function handleClick1() {
        setCups(cups => ({ ...smallCups, cup1: !cups.cup1 }))
        setPercentage(12.5);
        if(cups.cup1 === false) {
            setLitres(1.75);
        }
        else {
            setLitres(2);
        }
    }

    function handleClick2() {
        setCups(cups => ({ ...smallCups, cup1: true, cup2: !cups.cup2 }))
        //function needs to have backwards states to work - think due to execution within same function changing state
        if(cups.cup2 === false) {
            setPercentage(25);
            setLitres(1.5);
        }
        else {
            setPercentage(12.5);
            setLitres(1.75);
        }
    }
   
    function handleClick3() {
        setCups(cups => ({ ...smallCups, 
            cup1: true, cup2: true, cup3: !cups.cup3 }))
        //function needs to have backwards states to work - think due to execution within same function changing state
        if(cups.cup3 === false) {
            setPercentage(37.5);
            setLitres(1.25);
        }
        else {
            setPercentage(25);
            setLitres(1.5);
        }
    }

    function handleClick4() {
        setCups(cups => ({ ...smallCups, 
            cup1: true, cup2: true, cup3: true, cup4: !cups.cup4 }))
        //function needs to have backwards states to work - think due to execution within same function changing state
        if(cups.cup4 === false) {
            setPercentage(50);
            setLitres(1);
        }
        else {
            setPercentage(37.5);
            setLitres(1.25);
        }
    }

    function handleClick5() {
        setCups(cups => ({ ...smallCups, 
            cup1: true, cup2: true, cup3: true, cup4: true, cup5: !cups.cup5 }))
        //function needs to have backwards states to work - think due to execution within same function changing state
        if(cups.cup5 === false) {
            setPercentage(62.5);
            setLitres(0.75);
        }
        else {
            setPercentage(50);
            setLitres(1)
        }
    }

    function handleClick6() {
        setCups(cups => ({ ...smallCups, 
            cup1: true, cup2: true, cup3: true, cup4: true, cup5: true, cup6: !cups.cup6 }))
        //function needs to have backwards states to work - think due to execution within same function changing state
        if(cups.cup6 === false) {
            setPercentage(75);
            setLitres(0.5);
        }
        else {
            setPercentage(62.5);
            setLitres(0.75);
        }
    }

    function handleClick7() {
        setCups(cups => ({ ...smallCups, 
            cup1: true, cup2: true, cup3: true, cup4: true, cup5: true, cup6: true, cup7: !cups.cup7 }))
        //function needs to have backwards states to work - think due to execution within same function changing state
        if(cups.cup7 === false) {
            setPercentage(87.5);
            setLitres(0.25);
        }
        else {
            setPercentage(75);
            setLitres(0.5);
        }
    }

    function handleClick8() {
        setCups(cups => ({ ...smallCups, 
            cup1: true, cup2: true, cup3: true, cup4: true, cup5: true, cup6: true, cup7: true, cup8: !cups.cup8 }))
        //function needs to have backwards states to work - think due to execution within same function changing state
        if(cups.cup8 === false) {
            setPercentage(100);
            setLitres(0);
        }
        else {
            setPercentage(87.5);
            setLitres(0.25);
        }
    }

    return (
        <div className="dw-container">
            <h1 className="dw-h1">Drink Water</h1>
            <h3 className="dw-h3">Goal: 2 Litres</h3>

            <div className="dw-cup">
                <div className={!cups.cup8 ? "dw-remained" : "dw-remained hidden"} id="remained">
                    {/* <span id="litres">{`${(100 - percentage)}%`}</span> */}
                    <span id="litres">{`${litres}L`}</span>    

                    <small>Remaining</small>
                </div>

                <div className={
                    cups.cup1 === false ? "dw-percentage-hidden"
                    : percentage === 12.5 ? "dw-percentage dw-percentage-one"
                    : percentage === 25 ? "dw-percentage dw-percentage-two"
                    : percentage === 37.5 ? "dw-percentage dw-percentage-three"
                    : percentage === 50 ? "dw-percentage dw-percentage-four"
                    : percentage === 62.5 ? "dw-percentage dw-percentage-five"
                    : percentage === 75 ? "dw-percentage dw-percentage-six"
                    : percentage === 87.5 ? "dw-percentage dw-percentage-seven"
                    : "dw-percentage dw-percentage-full"
                    } 
                    id="percentage">
                    {percentage}%
                    
                </div>
            </div>

            <p className="dw-text">Select how many glasses of water you've had</p>

            <div className="dw-cups">
                <div className={!cups.cup1 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick1}>1<br></br><br></br>250 ml</div>
                
                <div className={!cups.cup2 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick2}>2<br></br><br></br>250 ml</div>
                
                <div className={!cups.cup3 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick3}>3<br></br><br></br>250 ml</div>
                
                <div className={!cups.cup4 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick4}>4<br></br><br></br>250 ml</div>
                
                <div className={!cups.cup5 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick5}>5<br></br><br></br>250 ml</div>
                
                <div className={!cups.cup6 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick6}>6<br></br><br></br>250 ml</div>
                
                <div className={!cups.cup7 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick7}>7<br></br><br></br>250 ml</div>
                
                <div className={!cups.cup8 ? "dw-cup dw-cup-small" : "dw-cup dw-cup-small dw-full"} onClick={handleClick8}>8<br></br><br></br>250 ml</div>
            </div>

            <HomeButton />
        </div>
    )
}

export default DrinkWater;