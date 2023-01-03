import React from "react";
import {useState, useRef} from "react";

import "./VerifyAccountUI.css";
import HomeButton from "../../components/HomeButton.js";

function VerifyAccountUI() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const [boxRef, setBoxRef] = useState();
    //state not in use but could be if had submission functionality - all code in place just commented out in handleClick
    const [disabled, setDisabled] = useState(false);
    
    const boxes = [
        {id: 1, ref: ref1, focus: "autoFocus"},
        {id: 2, ref: ref2, focus: ""},
        {id: 3, ref: ref3, focus: ""},
        {id: 4, ref: ref4, focus: ""},
        {id: 5, ref: ref5, focus: ""},
        {id: 6, ref: ref6, focus: ""},
    ]  

    function doTheStuff(e, ref, nextInput, prevInput) {
        if(e.key >= 0 && e.key <= 9) {
            ref.current.value = ""
            //this stops it putting the number in the wrong box
            setTimeout(() => nextInput.current.focus(), 10)
        } else if(e.key === "Backspace") {
            setTimeout(() => prevInput.current.focus(), 10)
        }
    }

    function handleKeydown(e, ref) {
        //console.log(e, ref)
        if(ref === ref1) {
            setBoxRef(ref1)
            const nextInput = ref2;
            const prevInput = ref1;

            doTheStuff(e, ref1, nextInput, prevInput)
        }

        if(ref === ref2) {
            setBoxRef(ref2)
            const nextInput = ref3;
            const prevInput = ref1;

            doTheStuff(e, ref2, nextInput, prevInput)
        }

        if(ref === ref3) {
            setBoxRef(ref3)
            const nextInput = ref4;
            const prevInput = ref2;

            doTheStuff(e, ref3, nextInput, prevInput) 
        }

        if(ref === ref4) {
            setBoxRef(ref4)
            const nextInput = ref5;
            const prevInput = ref3;

            doTheStuff(e, ref4, nextInput, prevInput)
        }

        if(ref === ref5) {
            setBoxRef(ref5)
            const nextInput = ref6;
            const prevInput = ref4;

            doTheStuff(e, ref5, nextInput, prevInput)
        }

        if(ref === ref6) {
            setBoxRef(ref6)
            const nextInput = ref6;
            const prevInput = ref5;

            doTheStuff(e, ref6, nextInput, prevInput)
            //setDisabled(true); could do this on submission to grey out, but as want people to be able to go back and change and no submit function, removed
        }

    }

    console.log(boxRef);

    return(
        <div className="vaui-big-container">
            <div className="vaui-container">
                <h2>Verify Your Account</h2>
                <p>We emailed you the six digit code to absolutely_awesome@email.com <br /> Enter the code below to confirm your email address</p>

                <div className="vaui-code-container">

                    {
                        boxes.map((box) => {
                            return <input key={box.id} ref={box.ref} type="number" className="vaui-code" placeholder="0" min="0" max="9" required 
                            autoFocus={box.focus}
                            disabled={disabled ? "disabled" : ""}
                            onKeyDown={(e) => handleKeydown(e, box.ref)} />
                        })
                    }

                </div>

                <small className="vaui-info">This is design only. We didn't actually send you an email as we don't have your email, right?</small>
            </div>

            <HomeButton />
        </div>
    )
}

export default VerifyAccountUI;