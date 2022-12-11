import React from "react";
import {useState} from "react";

import "./FormWaveAnimation.css";
import FormLabelSpan from "./FormLabelSpan.js";

function FormWaveAnimation() {
    const [wave, setWave] = useState(false);

   
            

    return (
        <div className="fwa-container">
            <div className="fwa-small-container">
                <h1 className="fwa-h1">Please Login</h1>
                <form>
                    <div className="fwa-form-control">
                        <input type="fwa-text" required />
                        {/* <label>Email</label> */}
                        <FormLabelSpan label={"Email"} />
                    </div>

                    <div className="fwa-form-control">
                        <input type="fwa-password" required />
                        <label>Password</label>
                    </div>

                    <button className="fwa-btn">Login</button>

                    <p className="fwa-text">Don't have an account? <a href="#">Register</a></p>
                </form>
            </div>

        </div>
    )
}

export default FormWaveAnimation;