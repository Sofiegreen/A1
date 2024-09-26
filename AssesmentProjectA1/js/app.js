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
tryLoadGame();
updateScore();

button0.addEventListener("click", function(){
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForai();
  showPlayerRollResult();
  showaiRollResult();
  determineWinner();
  updateScore();
  saveAsCookie();
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


// COOKIES


function saveAsCookie() {
  document.cookie = "playerScore=" + playerScore + ";expires=Tue, 31 Dec 2024 12:00:00 UTC";
  document.cookie = "aiScore=" + aiScore + ";expires=Tue, 31 Dec 2024 12:00:00 UTC";
}

function tryLoadGame() {
  playerScore= getCookie("playerScore");
  aiScore= getCookie("aiScore");
}


function getCookie(cname) {
  let name = cname + "="
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}


