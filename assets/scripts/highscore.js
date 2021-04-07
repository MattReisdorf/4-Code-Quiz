var highScoreText = document.querySelector("#highScoreText");
var userData = localStorage.getItem("userData");
var userScores = [];

userScores.push(localStorage.getItem("userData"));

highScoreText.innerHTML = userScores;