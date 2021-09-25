const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const questionBox = document.getElementById("question-box");
const questionEl = document.getElementById("question");
const answerButton1 = document.getElementById("button-1");
const answerButton2 = document.getElementById("button-2");
const answerButton3 = document.getElementById("button-3");
const answerButton4 = document.getElementById("button-4");
let shuffledQuestion, currentQuestion

const questions = [
    {
        question: "In what year did Michael Schumacher win his first championship?",
        answers: [
            {text: "1994", correct: true},
            {text: "2000", correct: false},
            {text: "1995", correct: false},
            {text: "1993", correct: false},
        ]
    },
    {
        question: "Which manufactuer has the most constructors championships?",
        answers: [
            {text: "Ferrari", correct: true},
            {text: "McLaren", correct: false},
            {text: "Williams", correct: false},
            {text: "Mercedes", correct: false},
        ]
    },
    {
        question: "Which engine era has produced the fastest F1 cars?",
        answers: [
            {text: "V6 turbo-hybrid era", correct: true},
            {text: "V8 era", correct: false},
            {text: "V10 era", correct: false},
            {text: "V16 era", correct: false},
        ]
    },
    {
        question: "Which driver holds the record for most wins in Formula 1?",
        answers: [
            {text: "Lewis Hamilton", correct: true},
            {text: "Michael Schumacher", correct: false},
            {text: "Sebastian Vettel", correct: false},
            {text: "Alain Prost", correct: false},
        ]
    },
];

// calls startQuiz function when button is clicked
startButton.addEventListener("click", function(){
    startQuiz()
})
nextButton.addEventListener("click", function(){
    currentQuestion++
    nextQuestion()
})

// what happens when you click start button
function startQuiz(){
    console.log("start")
    timer()
    startButton.classList.add("hide")
    nextButton.classList.remove("hide")
    shuffledQuestion = questions.sort(function(){ Math.random() - .5})
    currentQuestion = 0
    questionBox.classList.remove("hide")
    nextQuestion()
}

// sets next question on card
function nextQuestion(){
    showQuestion(shuffledQuestion[currentQuestion])

}

function showQuestion(question){
    questionEl.innerText = question.question
    answerButton1.innerText = question.answers [0] .text
    answerButton2.innerText = question.answers [1] .text
    answerButton3.innerText = question.answers [2] .text
    answerButton4.innerText = question.answers [3] .text
    
    
}

// what happens when you select an answer
function selectAnswer(){



}

// timer function
function timer(){
    var count = 99;
    var interval = setInterval(function(){
        document.getElementById("timer").innerText = "Timer: "+ count;
        count--;
        if( count === 0){
            clearInterval(interval);
            document.getElementById("timer").innerText = "You Lose"
        }
    }, 1000);
}