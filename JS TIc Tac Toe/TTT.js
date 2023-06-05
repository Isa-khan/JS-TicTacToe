var timeLeft;
var score;
var gameStarted = false;

var circle = document.getElementById("circle");
var timeSpan = document.getElementById("time");
var scoreSpan = document.getElementById("score");
var startButton = document.getElementById("start-button");

function startGame() { 
  gameStarted = true;
  timeLeft = 10;
  score = 0;
  updateScore();
  updateTime();
  circle.addEventListener("click", clickCircle);
  var timer = setInterval(function() {
    timeLeft--;
    updateTime();
    if (timeLeft <= 0) {
      endGame(timer);
    }
  }, 1000);
}

function clickCircle() {
  score++;
  updateScore();
}

function endGame(timer) {
  clearInterval(timer);
  gameStarted = false;
  circle.removeEventListener("click", clickCircle);
  alert("Game Over! Your score is " + score);
}

function updateScore() {
  scoreSpan.textContent = score;
}

function updateTime() {
  timeSpan.textContent = timeLeft;
}

startButton.addEventListener("click", startGame);

var timeLeft;
var score1, score2;
var gameStarted = false;

var circle = document.getElementById("circle");
var timeSpan = document.getElementById("time");
var score1Span = document.getElementById("score1");
var score2Span = document.getElementById("score2");
var startButton = document.getElementById("start-button");
var winnerMessage = document.getElementById("winner-message");

function startGame() {
  gameStarted = true;
  timeLeft = 10;
  score1 = 0;
  score2 = 0;
  updateScores();
  updateTime();
  circle.addEventListener("click", clickCircle);
  var timer = setInterval(function() {
    timeLeft--;
    updateTime();
    if (timeLeft <= 0) {
      endGame(timer);
    }
  }, 1000);
}

function clickCircle() {
  if (gameStarted) {
    if (this.classList.contains("player1")) {
      score1++;
    } else {
      score2++;
    }
    updateScores();
  }
}

function endGame(timer) {
  clearInterval(timer);
  gameStarted = false;
  circle.removeEventListener("click", clickCircle);
  var winner;
  if (score1 > score2) {
    winner = "Player 1";
  } else if (score2 > score1) {
    winner = "Player 2";
  } else {
    winner = "It's a tie!";
  }
  winnerMessage.textContent = "Winner: " + winner;
}

function updateScores() {
  score1Span.textContent = score1;
  score2Span.textContent = score2;
}

function updateTime() {
  timeSpan.textContent = timeLeft;
}

startButton.addEventListener("click", startGame);

var timeLeft;
var score1, score2;
var gameStarted = false;

var circle = document.getElementById("circle");
var timeSpan = document.getElementById("time");
var score1Span = document.getElementById("score1");
var score2Span = document.getElementById("score2");
var startButton = document.getElementById("start-button");
var winnerMessage = document.getElementById("winner-message");
var resetButton = document.getElementById("reset-button");

function startGame() {
  gameStarted = true;
  timeLeft = 10;
  score1 = 0;
  score2 = 0;
  updateScores();
  updateTime();
  circle.classList.remove("player1", "player2");
  circle.addEventListener("click", clickCircle);
  var timer = setInterval(function() {
    timeLeft--;
    updateTime();
    if (timeLeft <= 0) {
      endGame(timer);
    }
  }, 1000);
}

function clickCircle() {
  if (gameStarted) {
    if (this.classList.contains("player1")) {
      score1++;
    } else {
      score2++;
    }
    updateScores();
  }
}

function endGame(timer) {
  clearInterval(timer);
  gameStarted = false;
  circle.removeEventListener("click", clickCircle);
  var winner;
  if (score1 > score2) {
    winner = "Player 1";
  } else if (score2 > score1) {
    winner = "Player 2";
  } else {
    winner = "It's a tie!";
  }
  winnerMessage.textContent = "Winner: " + winner;
}

function updateScores() {
  score1Span.textContent = score1;
  score2Span.textContent = score2;
}

function updateTime() {
  timeSpan.textContent = timeLeft;
}

function resetGame() {
  gameStarted = false;
  timeLeft = 0;
  score1 = 0;
  score2 = 0;
  updateScores();
  updateTime();
  winnerMessage.textContent = "";
  circle.classList.remove("player1", "player2");
}

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);


