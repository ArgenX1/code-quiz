const scoreList = document.getElementById("score-list")
const scoreForm = document.getElementById("score-form")
const initialsInput = document.querySelector("#initials")
const scoreInput = document.getElementById("score")
var score
var scorers = []

function renderScore(){
    scoreList.innerHTML = "";

    for( var i = 0; i < scorers.length; i++){
        var scorer = scorers[i];
        var li = document.createElement("li");
        li.textContent = scorer.initials + "  -  " + scorer.score;
        li.setAttribute("data-index", i);
        
        scoreList.appendChild(li)

    }
}

function initialize(){
    var storedScorers = JSON.parse(localStorage.getItem("scorers"));
    if(storedScorers !== null){
        scorers = storedScorers;
    }

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




// TODO: order score list from highest to lowest
        //compare score attribute of scorer object