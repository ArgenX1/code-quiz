const startButton = document.getElementById("start-button")
const questionBox = document.getElementById("question-box")

// calls startQuiz function when button is clicked
startButton.addEventListener("click", function(){
    startQuiz()
})

// what happens when you click start button
function startQuiz(){
    console.log("start")
    startButton.classList.add("hide")
    questionBox.classList.remove("hide")
    nextQuestion()
}

// sets next question on card
function nextQuestion(){

}

// what happens when you select an answer
function answer(){

}