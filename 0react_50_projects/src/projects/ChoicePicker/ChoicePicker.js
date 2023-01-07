import React from "react";
import {useState} from "react";

import "./ChoicePicker.css";
import HomeButton from "../../components/HomeButton.js";
// import Choice from "./Choice.js";

function ChoicePicker() {
    const [tag, setTag] = useState([]);
    const [textAllow, setTextAllow] = useState(false);
    const [selected, setSelected] = useState([]);

    const [inputValue, setInputValue] = useState("");

    function textInput(e) {
        createTags(e.target.value)

        if(e.key === "Enter") {
            setTimeout(() => {
                setInputValue("")
                // e.target.value = "";
                setTextAllow(true);
            }, 10);
    
            randomSelect();
        }
    }

    //working
    function createTags(input) {
        //console.log(input);
        const tags = input.split(",")
            .filter(tag => tag.trim() !== "")
            .map(tag => tag.trim());
        
        //clear them before do anything
        setTag(tags);
    }

    function randomSelect() {
        const times = 30;
    
        const interval = setInterval(() => {
            const randomTag = pickRandomTag() 
            changeSelection(randomTag)
        }, 100);
    
        setTimeout(() => {
            clearInterval(interval);
    
            setTimeout(() => {
                const randomTag = pickRandomTag();
                console.log("final randomTag: ", randomTag)
                
                changeSelection(randomTag)
                setTextAllow(false);
            }, 100)
            
        }, times * 100);
    }
    
    //working
    function pickRandomTag() {
        return tag[Math.floor(Math.random() * tag.length)];
    }

    function changeSelection(randomtag) {
        setSelected(randomtag)
    }

    //run when focus on textarea again to clear states
    function clearTags() {
        setTag([]);
        setSelected([]);
    }
    

    return (
        <div className="cp-container">
            <div className="cp-small-container">
                <h3 className="cp-h3">Enter all of the choices, divided by a comma (",")
                <br /> Press ENTER when you're done
                </h3>

                {/*need to use keyUp event otherwise last character doesn't show in tag prior to typing next if using keyDown. cannot use onChange as doesn't give access to e.key Enter event*/}
                <textarea className="cp-textarea" id="textarea" placeholder="Enter choices here..." autoFocus onKeyUp={textInput} disabled={textAllow} onFocus={clearTags}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                ></textarea>

                <div className="cp-tags" id="tags">
                    {/* <Choice tag={tag} highlight={highlight} /> */}
                    {tag.map((tag, index) => {
                        return <span className={selected === tag || selected === tag.slice(0, -1) ? "cp-tag cp-highlight" : "cp-tag"} key={index}>{tag}</span>
                    })}
                </div>
            </div>

            <HomeButton />
        </div>
    )
}

export default ChoicePicker;

//PRIOR TO REFACTORING TO TRY AND MAKE SIMPLER
// function randomSelect() {
//     const times = 30;

//     const interval = setInterval(() => {
//         const randomTag = pickRandomTag()
        
//         changeSelection(randomTag)
//         // highlightTag(randomTag)

//         // setTimeout(() => {
//         //     unHighlightTag(randomTag)
//         // }, 100)

//     }, 100);

//     setTimeout(() => {
//         clearInterval(interval);

//         setTimeout(() => {
//             const randomTag = pickRandomTag();
//             console.log("final randomTag: ", randomTag)
            
//             changeSelection(randomTag)
//             // highlightTag(randomTag);
//             setTextAllow(false);
//         }, 100)
        
//     }, times * 100);
// }

// //working
// function pickRandomTag() {
//     return tag[Math.floor(Math.random() * tag.length)];
// }

// function changeSelection(randomtag) {
//     setSelected(randomtag)
// }

// // function highlightTag(selected) {
// //     setSelected(selected);
// //     console.log("selected to highlight :", selected);
// // }

// // function unHighlightTag(selected) {
// //     setSelected(selected);
// //     console.log("selected to UNhighlight :", selected);
// // }