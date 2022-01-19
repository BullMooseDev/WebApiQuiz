const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

for (let index = 0; index < highScores.length; index++) {
    const score = highScores[index];
    var newHighScore = document.createElement("li");
    newHighScore.classList.add("high-score")
    newHighScore.innerHTML = `${score.name} - ${score.score}`
    highScoresList.appendChild(newHighScore);
};