const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const finishButton = document.getElementById("finish-button");
const questionBox = document.getElementById("question-box");
const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons")
const answerButton1 = document.getElementById("button-1");
const answerButton2 = document.getElementById("button-2");
const answerButton3 = document.getElementById("button-3");
const answerButton4 = document.getElementById("button-4");
const correctDisplay = document.getElementById("correct")
const wrongDisplay = document.getElementById("wrong")
var count = 99;
var isFinished = false;
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
startButton.addEventListener("click", startQuiz);

answerButtons.addEventListener("click", selectAnswer);

// what happens when you click start button
function startQuiz(){
    console.log("start")
    count = 99
    isFinished = false
    timer()
    finishButton.classList.add("hide")
    startButton.classList.add("hide")
    shuffledQuestion = questions.sort(() => Math.random()-0.5)
    currentQuestion = 0
    questionBox.classList.remove("hide")
    nextQuestion()
}

// sets next question on card
function nextQuestion(){
    showQuestion(shuffledQuestion[currentQuestion])
    console.log(shuffledQuestion[currentQuestion])

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
function selectAnswer(event){
    console.log(event)
    if(event.target.dataset.label === shuffledQuestion[currentQuestion].correct){
        console.log("correct")
        correctDisplay.classList.remove("hide")
        wrongDisplay.classList.add("hide")
        if(shuffledQuestion.length > currentQuestion + 1){
            currentQuestion++
            nextQuestion()

        } else {
            startButton.innerText = "Restart"
            startButton.classList.remove("hide")
            finishButton.classList.remove("hide")
            isFinished = true
        }
    } else {
        wrongDisplay.classList.remove("hide")
        correctDisplay.classList.add("hide")
        console.log("wrong")
        count-=10;
    }
}

// timer function
function timer(){
    var interval = setInterval(function(){
        document.getElementById("timer").innerText = "Timer: " + count;
        count--;
        if( count === 0){
            clearInterval(interval);
            document.getElementById("timer").innerText = "You Lose"
        } else if(isFinished){
            clearInterval(interval);
            document.getElementById("timer").innerText = "Timer: " + count + " Winner!" 
            localStorage.setItem("count", JSON.stringify(count));
        }
    
    }, 1000);
}