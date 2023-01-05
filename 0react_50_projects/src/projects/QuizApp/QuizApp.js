import React from "react";
import {useState, useEffect} from "react";

import "./QuizApp.css";
import HomeButton from "../../components/HomeButton.js";
import {quizData} from "./quizData.js";

function QuizApp() {
    //don't need to set quizData as a state because it doesn't change so doesn't need to be watched
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    //to show either quiz or results
    const [complete, setComplete] = useState(false);

    //not doing anything, just a test
    // useEffect(() => {
    //     console.log(optionChosen);
    // }, [optionChosen])

    function handleSubmit() {
        if(quizData[currentQuestion].correct === optionChosen) {
            setScore(score + 1)
        }
        //console.log(score); //this always shows one behind because of state, but result shows correctly
        
        setCurrentQuestion(currentQuestion + 1)
    
        if(currentQuestion === quizData.length - 1) {
            setComplete(true);
        } 
    }

    return (
        <div className="quiz-big-container">
                <div className="quiz-quiz-container" id="quiz">
                
                    {
                        !complete ? 
                        <>
                        <div className="quiz-quiz-header">
                            <h2 className="quiz-h2" id="question">{quizData[currentQuestion].question}</h2>
                            <ul>
                                <li>
                                    <input type="radio" name="answer" id="a" className="quiz-answer"
                                    onChange={() => setOptionChosen("a")}
                                    />
                                    <label htmlFor="a" id="a_text">{quizData[currentQuestion].a}</label>
                                </li>

                                <li>
                                    <input type="radio" name="answer" id="b" className="quiz-answer"
                                    onChange={() => setOptionChosen("b")}
                                    />
                                    <label htmlFor="b" id="b_text">{quizData[currentQuestion].b}</label>
                                </li>

                                <li>
                                    <input type="radio" name="answer" id="c" className="quiz-answer"
                                    onChange={() => setOptionChosen("c")}
                                    />
                                    <label htmlFor="c" id="c_text">{quizData[currentQuestion].c}</label>
                                </li>

                                <li>
                                    <input type="radio" name="answer" id="d" className="quiz-answer"
                                    onChange={() => setOptionChosen("d")}
                                    />
                                    <label htmlFor="d" id="d_text">{quizData[currentQuestion].d}</label>
                                </li>
                            </ul>
                        </div>

                        <button className="quiz-submit" id="submit"
                        onClick={handleSubmit}
                        >Submit</button>
                        </>
                        :
                        <>
                        <h2 className="quiz-h2">You answered {score} questions out of {quizData.length} correctly</h2>
    
                        <button className="quiz-submit" onClick={() => window.location.reload()}>Reload</button>
                        </>
                    }
                    
                </div>

            <HomeButton />
        </div>
    )
}

export default QuizApp;