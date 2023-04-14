function getComputerChoice() {
    let playOptions = ['rock','paper','scissors'];
    let randomPlay = Math.floor(Math.random()*playOptions.length);
    return playOptions[randomPlay]
}

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection === computerSelection) {
        return "Tie! Try again."
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose. Paper beats rock"
        }
        if (computerSelection === "scissors") {
            return "You win! Rock beats scissors"
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock"
        }
        if (computerSelection === "scissors") {
            return "You lose. Scissors beat paper"
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose. Rock beats scissors"
        }
        if (computerSelection === "paper") {
            return "You win! Scissors beat paper"
        }
    }

}

const computerSelection = getComputerChoice();
const buttons = document.querySelectorAll('button');
function getPlayerSelection(e) {
    return this.classList.value;
}
buttons.forEach((button) => {
    button.addEventListener('click', playRound(getPlayerSelection,computerSelection));
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