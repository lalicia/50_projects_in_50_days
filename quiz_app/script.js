const quizData = [
    {
        question: "What is Brendan Fraser's character's first name in The Mummy movie franchise?",
        a: "Chad",
        b: "Ben",
        c: "Michael",
        d: "Rick",
        correct: "d",
    },
    {
        question: "In the movie Labyrinth, what does Jareth change for no one?",
        a: "His hair",
        b: "The stars",
        c: "His pants",
        d: "The TV channel",
        correct: "b",
    },
    {
        question: "In The Lord of The Rings, how many rings were gifted to the race of men?",
        a: "Nine",
        b: "Three",
        c: "Five",
        d: "One",
        correct: "a",
    },
    {
        question: "What is Nicholas Cage's best movie?",
        a: "Leaving Las Vegas",
        b: "National Treasure",
        c: "Face Off",
        d: "Con Air",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    //console.log(answer)

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score} questions out of ${quizData.length} correctly</h2>

                <button class="submit" onClick="location.reload()">Reload</button>
            `
        }
    }
})