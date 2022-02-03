let score = 0;
let computerScore = 0;
let gameOn = true
const score_display = document.getElementById("score_display")
const buttons = document.getElementById("buttons");
const btn = document.querySelector('.button');
const rock = document.getElementById('rock')
const scissors = document.getElementById('scissors')
const paper = document.getElementById('paper')
const message = document.createElement('div')
const results = document.getElementById('results')
const finish = document.createElement('div')
const playAgain = document.createElement('button')

function computerPlay() {
    let choice = Math.ceil(Math.random()*3)
    return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissors"
}

function playerPlay() {
    let choices = ["rock", "paper", "scissors"];
    if(btn == rock) {
        return choices[0]
    } else if(btn == scissors) {
        return choices[2]
    } else {
        return choices[1]
    }
}

function restartGame() {
    buttons.append(playAgain)
    // playAgain.addClass('button')
    playAgain.innerHTML = "Play Again"
    playAgain.addEventListener('click', () => gameOn = true)
}

function updateScore() {
    score_display.innerHTML = "Score: " + score + " Computer Score: " + computerScore
}

function endGameCheck() {
    if(score >= 5) {
        results.append(finish)
        finish.innerHTML = "Human wins! Well done!";
        gameOn = false;
        restartGame();
    } else if(computerScore >= 5) {
        results.append(finish)
        finish.innerHTML = "Computer wins! Bad luck";
        gameOn = false;
        restartGame();
    }
}


function playGame(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "rock") {
        score++;
        updateScore();
        message.innerHTML = "You win!"
    } else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        updateScore();
        message.innerHTML = "Computer wins!"
    } else {
        updateScore();
        message.innerHTML = "Draw!"
    }
    endGameCheck();
}

function game() {
    if(gameOn) {
        rock.addEventListener('click', () => playGame(playerPlay(), computerPlay()));
        scissors.addEventListener('click', () => playGame(playerPlay(), computerPlay()));
        paper.addEventListener('click', () => playGame(playerPlay(), computerPlay()));
    }
    results.append(message)
}




game();