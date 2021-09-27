const scoreList = document.getElementById("score-list")
const scoreForm = document.getElementById("score-form")
const initialsInput = document.querySelector("#initials")
const scoreInput = document.getElementById("score")
var score
var scorers = []

function renderScore(){
    // setting form blank
    scoreList.innerHTML = "";

    // orders highscore list highest to lowest
    scorers.sort(function(a,b){
        return b.score - a.score
    })
    console.log(scorers)
    // displays array on page
    for( var i = 0; i < scorers.length; i++){
        // sets scorer to the index of scorers
        var scorer = scorers[i];
        var li = document.createElement("li");
        // orders list by score highest to lowest

        // takes the key pairs and displays them on the page
        li.textContent = scorer.initials + "  -  " + scorer.score;
        li.setAttribute("data-index", i);
        console.log(scorer)
        
        scoreList.appendChild(li)

    }
}

function initialize(){
    // gets "scorers" from local storage
    var storedScorers = JSON.parse(localStorage.getItem("scorers"));
    if(storedScorers !== null){
        scorers = storedScorers;
    }
    // gets count from quiz and stores it to score
    var count = JSON.parse(localStorage.getItem("count"));
    if(count !== null){
        score = count;
        scoreInput.textContent = score;
    }

    renderScore()
}

function storeScore(){
    localStorage.setItem("scorers", JSON.stringify(scorers));
}

scoreForm.addEventListener("submit", function(event){
    event.preventDefault();
    var scoreText = initialsInput.value.trim();
    var nameScore = {initials: scoreText, score: score}

    if (scoreText === ""){
        return;
    }
    scorers.push(nameScore);
    initialsInput.value = "";

    storeScore();
    renderScore();
});

initialize()