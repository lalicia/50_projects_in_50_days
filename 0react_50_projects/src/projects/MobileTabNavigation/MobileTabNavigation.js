import React from "react";
import {useState, useRef} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

import "./MobileTabNavigation.css";
import HomeButton from "../../components/HomeButton.js";

function MobileTabNavigation() {
    const homeRef = useRef();
    const workRef = useRef();
    const blogRef = useRef();
    const aboutRef = useRef();

    const [active, setActive] = useState(true);
    const [show, setShow] = useState(true);
    const [selection, setSelection] = useState(homeRef);

    function handleClick(ref) {
        hideAllContents();
        hideAllItems();
 
        setSelection(ref)
        setActive(true);
        setShow(true);
    }

    
    function hideAllContents() {
        setShow(false)
    }
    
    function hideAllItems() {
        setActive(false)
    }


    return (
        <div className="mtn-container">
            <div className="mtn-phone">
            
                <img ref={homeRef} src="https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="street at night" className={show && selection === homeRef ? "mtn-content mtn-show" : "mtn-content"} />
                    
                <img ref={workRef} src="https://images.unsplash.com/photo-1571450669798-fcb4c543f6a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="neon sign" className={show && selection === workRef ? "mtn-content mtn-show" : "mtn-content"} />
                    
                <img ref={blogRef} src="https://images.unsplash.com/photo-1529480993802-d8e747bb1ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80" alt="escalator in neon" className={show && selection === blogRef ? "mtn-content mtn-show" : "mtn-content"} />
             
                <img ref={aboutRef} src="https://images.unsplash.com/photo-1611162706070-c43a6bf5ebc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="neon sign" className={show && selection === aboutRef ? "mtn-content mtn-show" : "mtn-content"} />
            
    
                <nav className="mtn-nav">
                    <ul>
                        <li className={active && selection === homeRef ? "mtn-active" : ""}
                        onClick={() => handleClick(homeRef)}>
                            <FontAwesomeIcon icon={faHome} />
                            <p>Home</p>
                        </li>

                        <li className={active && selection === workRef ? "mtn-active" : ""}
                        onClick={() => handleClick(workRef)}>
                            <FontAwesomeIcon icon={faBox} />
                            <p>Work</p>
                        </li>

                        <li className={active && selection === blogRef ? "mtn-active" : ""}
                        onClick={() => handleClick(blogRef)}>
                            <FontAwesomeIcon icon={faBookOpen} />
                            <p>Blog</p>
                        </li>

                        <li className={active && selection === aboutRef ? "mtn-active" : ""}
                        onClick={() => handleClick(aboutRef)}>
                            <FontAwesomeIcon icon={faUsers} />
                            <p>About Us</p>
                        </li>
                    </ul>
                </nav>
            </div>

            <HomeButton />
        </div>
    )
}

export default MobileTabNavigation;