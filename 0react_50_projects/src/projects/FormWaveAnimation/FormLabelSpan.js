import React from "react";

import "./FormWaveAnimation.css";

function FormLabelSpan({label}) {
    //console.log(label);

    let arr = label.split("")
        .map((letter, index) => { 
            return (
                {
                    id: index,
                    transitiondelay: `${index * 30}ms`,
                    letter: {letter}
                }
            )
        })

    console.log("this is arr:",arr);

    return (
        <label>
            {arr.map((item) => {
                return (
                    <span key={item.id} style={{transitionDelay:`${item.transitiondelay}`}}>{item.letter.letter}</span>
                    )
                })}
        </label>
    )
}

export default FormLabelSpan;