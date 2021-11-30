var startEl = document.querySelector('start');
var quizEl = document.querySelector('quiz');
var scoreEl = document.querySelector('score');
var scoreEl = document.querySelector('startBtn');
var quizH2 = document.querySelector('quizH2');

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
    STATE = "START";
    displayElements();
}

function playQuiz() {
  STATE = "QUIZ";
  displayElements();
}

function showScore() {
    STATE = "SCORE"
    displayElements();
}

function nextQuestion() {
    cursor++;
    renderQuestiom();
}

function renderQuestiom() {
    quizH3.textContent = cursor;
}

startBtn.addEventListener("click", playQuiz);
quizH2.addEventListener("click", showScore);
quizH3.addEventListener("click", nextQuestion);

init();
