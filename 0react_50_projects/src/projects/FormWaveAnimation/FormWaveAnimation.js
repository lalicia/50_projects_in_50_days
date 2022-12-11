import React from "react";

import "./FormWaveAnimation.css";
import FormLabelSpan from "./FormLabelSpan.js";

import HomeButton from "../../components/HomeButton.js";

function FormWaveAnimation() {  

    return (
        <div className="fwa-container">
            <div className="fwa-small-container">
                <h1 className="fwa-h1">Please Login</h1>
                <form>
                    <div className="fwa-form-control">
                        <input type="text" required />
                        {/* <label>Email</label> */}
                        <FormLabelSpan label={"Email"} />
                    </div>

                    <div className="fwa-form-control">
                        <input type="password" required />
                        {/* <label>Password</label> */}
                        <FormLabelSpan label={"Password"} />
                    </div>

                    <button className="fwa-btn">Login</button>

                    <p className="fwa-text">Don't have an account? <a href="#">Register</a></p>
                </form>
            </div>

            <HomeButton />
        </div>
    )
}

export default FormWaveAnimation;