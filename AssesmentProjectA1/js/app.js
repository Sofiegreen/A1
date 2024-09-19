// VARIABLES

// Buttons
let button0= document.getElementById("button0");

// Texts
let playerRollText= document.getElementById("playerRollText");
let aiRollText= document.getElementById("aiRollText");
let result= document.getElementById("result");

// define that the highest number is

// Data
let playerRoll = 0;
let aiRoll=0;

// PROCESS
button0.addEventListener("click", function(){
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForai();
  showPlayerRollResult();
  showaiRollResult();
  determineWinner()
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
  }
  else {
    result.innerText = "YOU WIN!";
  }
}

// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML= "Player: " + playerRoll;
}

function showaiRollResult() {
  aiRollText.innerHTML= "AI: " + aiRoll;
}
