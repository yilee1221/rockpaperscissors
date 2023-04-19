
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

function restartGame(buttons) {
    const restartButton = document.createElement('button');
    restartButton.classList.add('restart');
    restartButton.textContent = 'RESTART';
    const restart = document.querySelector('.restart');
    restart.appendChild(restartButton);

    restartButton.addEventListener('click', () => {
        score1 = 0;
        score2 = 0;
        updateScore();

        winlose.textContent = '';
        gamePoint.textContent = '';
        restartButton.remove();

        buttons = document.querySelectorAll('.player button');
        buttons.forEach((button) => button.disabled = false);
    })

    

}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = this.classList.value;
    const compButton = document.getElementById(computerSelection);
    
    console.log(compButton);
    
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
    
    //compButton.classList.toggle('chosen');
    //compButton.classList.remove('chosen');

    if (score1 == 5 || score2 == 5) {
        const buttons = document.querySelectorAll('.player button');
        buttons.forEach((button) => button.disabled = true);
        if (score1 > score2) {
            gamePoint.textContent = "YOU WON THE GAME"
            restartGame();
        } else {
            gamePoint.textContent = "YOU LOST THE GAME"
            restartGame();
        }
    }
}

const buttons = document.querySelectorAll('.player button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});




