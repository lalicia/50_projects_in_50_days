import React from "react";
import {useState, useEffect} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import "./TestimonialBoxSwitcher.css";
import HomeButton from "../../components/HomeButton.js";
import {testimonials} from "./testimonialData"

function TestimonialBoxSwitcher() {
    const [index, setIndex] = useState(0);
    const [username, setUsername] = useState("");
    const [text, setText] = useState("");
    const [photo, setPhoto] = useState("");
    const [role, setRole] = useState("");

    //this is required to not have index 0 repeat in the switcher due to async update of index state - which can't be left null because then nothing works!
    useEffect(() => {
        setIndex(1);
        setUsername(testimonials[index].name);
        setText(testimonials[index].text);
        setPhoto(testimonials[index].photo);
        setRole(testimonials[index].position);
    }, [])

    useEffect(() => {
        const {name, position, photo, text} = testimonials[index];

        //time on this setInterval should match CSS animation time, but if does it is slightly out of sync - testing showed this kept them together quite well - one live did not hold up at 4970, changed back to match
        let interval = setInterval(() => {
            setText(text);
            setPhoto(photo);
            setUsername(name);
            setRole(position);
    
            setIndex(index + 1)
    
            if(index === testimonials.length - 1) {
                setIndex(0);
            }
            }, 5000);

        return () => clearInterval(interval)

    }, [index])


    // useEffect(() => {
    //     function updateTestimonial() {
    //         const {name, position, photo, text} = testimonials[index];
        
    //         setText(text);
    //         setPhoto(photo);
    //         setUsername(name);
    //         setRole(position);
        
    //         setIndex(index + 1)
        
    //         if(index > testimonials.length - 2) {
    //             setIndex(0);
    //         }
    //       }
        
    //       let interval = setInterval(updateTestimonial, 5000);

    //       return () => clearInterval(interval)

    // }, [index])

    

    return (
        <div className="tbs-container">
                <div className="tbs-testimonial-container">

                    {
                        username !== "" ? 
                        <>
                        <div className="tbs-progress-bar"></div>

                            <FontAwesomeIcon className="tbs-fa-quote-right tbs-fa-quote" icon={faQuoteRight}></FontAwesomeIcon>
                            <FontAwesomeIcon className="tbs-fa-quote-left tbs-fa-quote" icon={faQuoteLeft}></FontAwesomeIcon>

                            <p className="tbs-testimonial">
                                {text}
                            </p>

                            <div className="tbs-user">
                                <img src={photo} alt="user" className="tbs-user-img" />

                                <div className="tbs-user-details">
                                    <h4 className="tbs-username">{username}</h4>

                                    <p className="tbs-role">{role}</p>
                                </div>
                            </div>
                        </>
                        :
                        <h4 className="tbs-username">Loading...</h4>
                    }   
                    
                </div>

            <HomeButton />
        </div>
    )
}

export default TestimonialBoxSwitcher;