import React from "react";
import {useState, useEffect} from "react";

import "./ContentPlaceholderCard.css";
import HomeButton from "../../components/HomeButton.js";

function ContentPlaceholderCard() {
    const [header, setHeader] = useState(null);
    const [title, setTitle] = useState(null);
    const [excerpt, setExcerpt] = useState(null);
    const [profileImg, setProfileImg] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const [animatedBg, setAnimatedBg] = useState(true);

    useEffect(() => {
        setTimeout(getData, 2500);
    }, [])
    

    function getData() {
        setHeader("https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80")
        setTitle("Lorem ipsum dolor sit amet")
        setExcerpt("Lorem ipsum dolor sit amet consecteteur adipisicing elit. Dolore, preferendis")
        setProfileImg("https://randomuser.me/api/portraits/women/45.jpg")
        setName(`Jane Doe`)
        setDate(`Dec 25, 2022`)

        setAnimatedBg(false);
    }

    return (
        <div className="cpc-container">
            <div className="cpc-card">
                <div className={animatedBg ? 
                "cpc-card-header cpc-animated-bg cpc-img" 
                : "cpc-card-header cpc-img"
                }
                id="header">
                    {
                        header !== null ? 
                        <img src={header} alt=""></img>
                        : 
                        <>&nbsp;</>
                    }
                </div>

                <div className="cpc-card-content">
                    <h3 className={animatedBg ? 
                    "cpc-card-title cpc-animated-bg cpc-animated-bg-text"
                    :
                    "cpc-card-title"
                    } id="title">
                        {
                            title !== null ? 
                            title
                            :
                            <>&nbsp;</>
                        }
                    </h3>

                    <p className="cpc-card-excerpt" id="excerpt">
                        {
                            excerpt !== null ? 
                            excerpt
                            :
                            <>
                                <span className="cpc-animated-bg cpc-animated-bg-text">&nbsp;</span>
                                <span className="cpc-animated-bg cpc-animated-bg-text">&nbsp;</span>
                                <span className="cpc-animated-bg cpc-animated-bg-text">&nbsp;</span>
                            </>   
                        }
                    </p>

                    <div className="cpc-author">
                        <div className={animatedBg ? 
                        "cpc-profile-img cpc-animated-bg"
                        :
                        "cpc-profile-img"
                         } id="profile_img">
                            {
                                profileImg ? 
                                <img src={profileImg} alt=""></img>
                                :
                                <>&nbsp;</>
                            }
                        </div>

                        <div className="cpc-author-info">
                            <strong className={animatedBg ? 
                            "cpc-animated-bg cpc-animated-bg-text"
                            :
                            ""
                             } id="name">
                                {
                                    name !== null ?
                                    name
                                    :
                                    <>&nbsp;</>
                                }
                            </strong>
                            <small className={animatedBg ? 
                            "cpc-animated-bg cpc-animated-bg-text"
                            :
                            ""
                            } id="date">
                                {
                                    date !== null ? 
                                    date
                                    : 
                                    <>&nbsp;</>
                                }
                            </small>
                        </div>
                    </div>
                </div>

            </div>

            <HomeButton />
        </div>
    )
}

export default ContentPlaceholderCard;