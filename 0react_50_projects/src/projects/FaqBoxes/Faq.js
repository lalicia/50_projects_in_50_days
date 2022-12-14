import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

import "./FaqBoxes.css";


function Faq({title, text, box, setBox}) {

    return (
        <div className={box ? "faq-faq faq-active" : "faq-faq"}>

            <FontAwesomeIcon icon={faComment} 
            className={box ? "faq-comment" : "faq-comment-invisible"}
            />
            <FontAwesomeIcon icon={faComment} 
            className={box ? "faq-comment2" : "faq-comment2-invisible"} 
            />

            <h3 className="faq-faq-title">{title}</h3>
            <p className="faq-faq-text">{text}</p>
            
            <button className="faq-faq-toggle" onClick={() => setBox(!box)}>
                <FontAwesomeIcon icon={faChevronDown} className="faq-fa-chevron-down" />
                <FontAwesomeIcon icon={faTimes} className="faq-fa-times" />
            </button>

        </div>
    )

}

export default Faq;