// VARIABLES

// Buttons
let button0= document.getElementById("button0");

// Texts
let playerRollText= document.getElementById("playerRollText");
let aiRollText= document.getElementById("aiRollText");
let result= document.getElementById("result");

let playerScoreText= document.getElementById("playerScoreText");
let aiScoreText= document.getElementById("aiScoreText");


// Data
let playerRoll = 0;
let aiRoll=0;

let playerScore= 0;
let aiScore= 0;


// PROCESS
button0.addEventListener("click", function(){
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForai();
  showPlayerRollResult();
  showaiRollResult();
  determineWinner();
  updateScore();
})

// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1
}

function getRandomNumberOneToSixForai() {
  aiRoll = Math.floor(Math.random() * 6) + 1
}

function determineWinner() {
  if (playerRoll === aiRoll) {
    result.innerText = "IT´S A DRAW!";
  }
  else if (playerRoll < aiRoll) {
    result.innerText = "YOU LOSE!";
    aiScore++
  }
  else {
    result.innerText = "YOU WIN!";
    playerScore++;
  }
}


// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML= "Player: " + playerRoll;
}

function showaiRollResult() {
  aiRollText.innerHTML= "AI: " + aiRoll;
}

function updateScore() {
  playerScoreText.innerHTML= "Player: " + playerScore.toString() + " wins";
  aiScoreText.innerHTML= "AI: " + aiScore.toString() + " wins";
}
