function computerPlay() {
    let choice = Math.ceil(Math.random()*3)
    return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissors"
}

function playerPlay() {
    let playerSelection = prompt("enter rock, paper or scissors", "rock")
    return playerSelection.toLowerCase()
}

let score = 0;
let computerScore = 0;

function playGame(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "rock") {
        score++;
        return "You win!"
    } else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "Computer Wins!"
    } else {
        return "Draw!"
    }
}

function game() {
    for(let i = 1; i < 6; i++) {
        console.log(playGame(playerPlay(), computerPlay()));
        console.log("Score:", score);
        console.log("Computer Score", computerScore)
    }

}

game();