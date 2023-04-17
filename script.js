
let playerScore = document.querySelector(".score1");
let compScore = document.querySelector(".score2");
let score1 = 0;
let score2 = 0;
playerScore.textContent = score1;
compScore.textContent = score2;
let winlose = document.querySelector(".winlose");
let gamePoint = document.querySelector(".game-point")

function updateScore() {
    playerScore.textContent = score1;
    compScore.textContent = score2;
}
function getComputerChoice() {
    let playOptions = ['rock','paper','scissors'];
    let randomPlay = Math.floor(Math.random()*playOptions.length);
    return playOptions[randomPlay]
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log(computerSelection)
    playerSelection = this.classList.value;
    
    if(playerSelection === computerSelection) {
        winlose.textContent = "TIE! TRY AGAIN";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            winlose.textContent = "YOU LOSE. PAPER BEATS ROCK";
            score2++;
            updateScore();
        }
        if (computerSelection === "scissors") {
            winlose.textContent = "YOU WIN! ROCK BEATS PAPER";
            score1++;
            updateScore();
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            winlose.textContent = "YOU WIN! PAPER BEATS ROCK";
            score1++;
            updateScore();
        }
        if (computerSelection === "scissors") {
            winlose.textContent = "YOU LOSE. SCISSORS BEAT PAPER";
            score2++;
            updateScore();
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            winlose.textContent = "YOU LOSE. ROCK BEATS SCISSORS";
            score2++;
            updateScore();
        }
        if (computerSelection === "paper") {
            winlose.textContent = "YOU WIN! SCISSORS BEAT PAPER";
            score1++;
            updateScore();
        }
    }

    if (score1 == 5 || score2 == 5) {
        if (score1 > score2) {
            gamePoint.textContent = "YOU WON THE GAME"
        } else {
            gamePoint.textContent = "YOU LOST THE GAME"
        }
        
    }

}

const buttons = document.querySelectorAll('.player button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});



/*
function game() {
    let playerCount = 0;
    let compCount = 0;

    
        let playerSelection = prompt("Rock, paper, or scissors? ");
        let computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
        let oneRound = playRound(playerSelection, computerSelection);
        console.log(oneRound);
        if (oneRound.startsWith("You win")) {
            playerCount++;
        } else if (oneRound.startsWith("You lose")){
            compCount++;
        }
    if (playerCount > compCount) {
        return "You win the game!";
    } else {
        return "You lose!";
    }
}
console.log(game());
*/