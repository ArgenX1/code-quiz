const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const finishButton = document.getElementById("finish-button");
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
        answers: {
            A: "1995",
            B: "1994",
            C: "2000",
            D: "1993",
        },
        correct: "B"
    },
            
        
    {
        question: "Which manufactuer has the most constructors championships?",
        answers: {
            A: "Ferrari",
            B: "McLaren",
            C: "Williams",
            D: "Mercedes",
        },
        correct: "A"
    },
    {
        question: "Which engine era has produced the fastest F1 cars?",
        answers: {
            A: "V10 era",
            B: "V16 era",
            C: "V6 turbo-hybrid era",
            D: "V8 era",
        },
        correct: "C"
    },
    {
        question: "Which driver holds the record for most wins in Formula 1?",
        answers: {
            A: "Michael Schumacher",
            B: "Alain Prost",
            C: "Lewis Hamilton",
            D: "Sebastian Vettel",
        },
        correct: "C"
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
    shuffledQuestion = questions.sort(() => Math.random()-0.5)
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
    answerButton1.innerText = question.answers.A
    answerButton2.innerText = question.answers.B
    answerButton3.innerText = question.answers.C
    answerButton4.innerText = question.answers.D
    console.log(question.correct)   

}

// what happens when you select an answer
function selectAnswer(){



    if(shuffledQuestion.length > currentQuestion + 1){
        nextButton.classList.remove("hide")  
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
        finishButton.classList.remove("hide")
}
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