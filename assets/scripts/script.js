var score = document.querySelector("#score");
var time = document.querySelector("#Time");
var question = document.querySelector("#question");
var ans1 = document.querySelector("#ans1");
var ans2 = document.querySelector("#ans2");
var ans3 = document.querySelector("#ans3");
var ans4 = document.querySelector("#ans4");
var answerClass = document.querySelector(".answers");
var begin = document.querySelector("#Begin");
var reset = document.querySelector("#Reset");
var result = document.querySelector("#result");
var timeLeft;
var timer;
var userData = [];

var playerScore = 0;
var highScore = 0;

var answersAll = [ans1, ans2, ans3, ans4];

for(i = 0; i < answersAll.length; i++){
    answersAll[i].style.display = "none";
    // console.log(i);
    // console.log(typeof i);
};

var allAnswers = [{question:"Inside which HTML element do we put the JavaScript?",
answers:["js", "script", "javascript", "scripting"], correct:"script"}, 

{question:"Where is the correct place to insert a JavaScript?",
answers:["The body section", "Both the head section and the body section are correct", "The head section", "After the footer"], correct:"The body section"}, 

{question:"What is the correct syntax for referring to an external script called xxx.js?",
answers:["script src = xxx.js", "script href = xxx.js", "script name = xxx.js", "link source = xxx.js"], correct:"script src = xxx.js"},

{question:"How do you write Hello World in an alert box?",
answers:["alert(Hello World)", "msgBox(Hello World)", "alertBox(Hello World)", "msg(Hello World)"], correct:"alert(Hello World)"}, 

{question:"How do you create a function in JavaScript?",
answers:["function myFunction()", "function:myFunction()", "function = myFunction", "function(myFunction())"], correct:"function myFunction()"},

{question:"How do you call a function named myFunction?",
answers:["myFunction()", "call myFunction()", "call function myFunction()", "activate myFunction()"], correct:"myFunction()"}, 

{question:"How to write an IF statement in JavaScript?",
answers:["if (i == 5)", "if i = 5", "if i == 5 then", "if i = 5 then"], correct:"if (i == 5)"}, 

{question:"How to write an IF statement for executing some code if i is NOT equal to 5?",
answers:["if i =! 5 then", "if (i <> 5)", "if i <> 5", "if (i != 5)"], correct:"if (i != 5)"}];

// console.log(allAnsers.indexOf(question));

var sec = 60;
function timeStart() {
    function startTimer(){
        console.log('timer suppose to go')
            timer = setInterval(function(){
            sec--;
            time.innerHTML= sec.toString();
            if (sec <= 0) {
                console.log("End")
                End();
                clearInterval(timer);
            }
        }, 1000);
    }
    startTimer();
};

function scoreUpdate(){
    score.textContent = playerScore.toString();
    
};

begin.addEventListener("click", function(){
    ansUpdate();
    h1Update();
    timeStart();
    if(answerClass.dataset.state === "hidden"){
        for(i = 0; i < answersAll.length; i++){
            answersAll[i].dataset.state = "show";
            answersAll[i].style.display = "block";
        }
    } if(begin.dataset.state === "show"){
        begin.dataset.state = "hidden";
        begin.style.display = "none";
    }
});

function ansUpdate(){
    if (playerScore == 8) {
        End();
    }
    else {
        ans1.innerHTML = allAnswers[playerScore].answers[0];
        ans2.innerHTML = allAnswers[playerScore].answers[1];
        ans3.textContent = allAnswers[playerScore].answers[2];
        ans4.textContent = allAnswers[playerScore].answers[3];
    }
}

function h1Update(){
    if (playerScore == 8) {
        End();
    }
    else {
        question.textContent = allAnswers[playerScore].question;
    }
};

function End(){
    console.log("TrueEnd");
    clearInterval(timer);
    if(playerScore > highScore){
        var initials = prompt("High Score! Enter your initials.")
        highScore = playerScore;
        userData.push("Initials: " + initials,"High Score: " + highScore, "Remaining Time: " + sec);
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(userData);
    }
    question.textContent = "Quiz Over!"
    for(i = 0; i < answersAll.length; i++) {
        answersAll[i].dataset.state = "hidden";
        answersAll[i].style.display = "none";
    }
    result.textContent = "Please refresh to play again!";
};


// ans1.textContent = allAnswers[playerScore].answers[0];
// ans2.textContent = allAnswers[playerScore].answers[1];
// ans3.textContent = allAnswers[playerScore].answers[2];
// ans4.textContent = allAnswers[playerScore].answers[3];

ans1.addEventListener("click", function(event){
    
    if(event.target.innerHTML === allAnswers[playerScore].correct){
        
        
        playerScore = playerScore + 1;
        
        result.textContent = "Correct!";
        scoreUpdate();
        h1Update();
        ansUpdate();
    } else {
        result.textContent = "Incorrect";
        sec -= 5;
        time.innerHTML= sec.toString();
        if (playerScore === 8) {
            End();
        }
    }
});

ans2.addEventListener("click", function(event){
    if(event.target.innerHTML == allAnswers[playerScore].correct){
        
        
        playerScore = playerScore + 1;
        
        
        result.textContent = "Correct!";
        scoreUpdate();
        h1Update();
        ansUpdate();
        
    } else {
        result.textContent = "Incorrect";
        sec -= 5;
        time.innerHTML= sec.toString();
    }
    if (playerScore === 8) {
        End();
    }
});

ans3.addEventListener("click", function(event){
    if(event.target.innerHTML === allAnswers[playerScore].correct){
        
        playerScore = playerScore + 1;
        
        result.textContent = "Correct!";
        scoreUpdate();
        h1Update();
        ansUpdate();
    } else {
        result.textContent = "Incorrect";
        sec -= 5;
        time.innerHTML= sec.toString();
    }
    if (playerScore === 8) {
        End();
    }
});

ans4.addEventListener("click", function(event){
    if(event.target.innerHTML === allAnswers[playerScore].correct){
        
        
        playerScore = playerScore + 1;
        
        result.textContent = "Correct!";
        scoreUpdate();
        h1Update();
        ansUpdate();
    } else {
        result.textContent = "Incorrect";
        sec -= 5;
        time.innerHTML= sec.toString();
    }
    if (playerScore === 8) {
        End();
    }
}); 

