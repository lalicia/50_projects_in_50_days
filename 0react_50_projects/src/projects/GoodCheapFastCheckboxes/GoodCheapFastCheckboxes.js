import React from "react";
import {useState, useEffect} from "react";

import "./GoodCheapFastCheckboxes.css";
import HomeButton from "../../components/HomeButton.js";
import Toggle from "./Toggle.js";

function GoodCheapFastCheckboxes() {
    const [goodChecked, setGoodChecked] = useState(false);
    const [cheapChecked, setCheapChecked] = useState(false);
    const [fastChecked, setFastChecked] = useState(false);
    const [clicked, setClicked] = useState("");

    //having this in the doTrick vanilla function was making the uncheck happen on the NEXT click of the third selection (ie. when unchecking it not checking it) so needed to be in useEffect
    //this is only needed to uncheck an option if all three selected
    useEffect(() => {
        if(goodChecked && cheapChecked && fastChecked) {
            if(clicked === "good") {
                setFastChecked(false);
            }

            if(clicked === "cheap") {
                setGoodChecked(false);
            }

            if(clicked === "fast") {
                setCheapChecked(false);
            }
        } 
    }, [goodChecked, cheapChecked, fastChecked, clicked])

    //logic for only being able to select 2 of 3
    function handleChangeGood(e) {
        //console.log("hcg ran", e.target.id)
        setClicked(e.target.id)
        setGoodChecked(!goodChecked)
    }

    function handleChangeCheap(e) {
        setClicked(e.target.id)
        setCheapChecked(!cheapChecked)
    }

    function handleChangeFast(e) {
        setClicked(e.target.id)
        setFastChecked(!fastChecked)
    }

    return (
        <div className="gcfc-container">
            <h2 className="gcfc-h2">What do you want in a project?</h2>

            <Toggle optionId={"good"} optionName={"Good"} checked={goodChecked} setChecked={setGoodChecked} onChange={handleChangeGood} />

            <Toggle optionId={"cheap"} optionName={"Cheap"} checked={cheapChecked} setChecked={setCheapChecked} onChange={handleChangeCheap} />

            <Toggle optionId={"fast"} optionName={"Fast"} checked={fastChecked} setChecked={setFastChecked} onChange={handleChangeFast} />

            <HomeButton/>
        </div>
    )
}

export default GoodCheapFastCheckboxes;