var startEl = document.querySelector('start');
var quizEl = document.querySelector('quiz');
var scoreEl = document.querySelector('score');
var scoreEl = document.querySelector('startBtn');

var STATE = "START";

function displayElements() {
    if (STATE === "START") {
      startEl.style.display = "flex";
      quizEl.style.display = "none";
      scoreEl.style.display = "none";
    }
    if (STATE === "QUIZ") {
        startEl.style.display = "none";
        quizEl.style.display = "flex";
        scoreEl.style.display = "none";
    }
    if (STATE === "SCORE") {
        startEl.style.display = "none";
        quizEl.style.display = "none";
        scoreEl.style.display = "flex";
    }
}

function init() {
    STATE = "START"
}

function playQuiz() {
  STATE = "START";
}
startBtn.addEventListener();

init();
