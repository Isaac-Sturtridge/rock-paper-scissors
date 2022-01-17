function computerPlay() {
    let choice = Math.ceil(Math.random()*3)
    return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissors"
}

function playerPlay() {
    let playerSelection = prompt("enter rock, paper or scissors", "rock")
    return playerSelection.toLowerCase()
}


function playGame(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "rock") {
        return "You win!"
    } else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors") {
        return "The Computer wins!"
    } else {
        return "Draw!"
    }
}

console.log(playGame(playerPlay(), computerPlay()));
