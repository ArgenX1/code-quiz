const scoreList = document.getElementById("score-list")
const scoreForm = document.getElementById("score-form")
const scoreInput = document.querySelector("#initials")

var scorers = []

function renderScore(){
    scoreList.innerHTML = "";

    for( var i = 0; i < scorers.length; i++){
        var scorer = scorers[i];
        var li = document.createElement("li");
        li.textContent = scorer;
        li.setAttribute("data-index", i);
        
        scoreList.appendChild(li)

    }
}

function initialize(){
    var storedScore = JSON.parse(localStorage.getItem("scorers"));
    if(storedScore !== null){
        scorers = storedScore;
    }

    renderScore()
}

function storeScore(){
    localStorage.setItem("scorers", JSON.stringify(scorers));
}

scoreForm.addEventListener("submit", function(event){
    event.preventDefault();
    var scoreText = scoreInput.value.trim();

    if (scoreText === ""){
        return;
    }
    scorers.push(scoreText);
    scoreInput.value = "";

    storeScore();
    renderScore();
});

initialize()