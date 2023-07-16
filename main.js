const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const counterPlayer = document.getElementById('user');
const counterComp = document.getElementById('comp');
const disclaimer = document.getElementById('disclaimer');
const disclaimerText = document.getElementById('disclaimer-text');

const array = [rock, paper, scissors];

let playerScore = 0;
let computerScore = 0;

counterPlayer.innerText = playerScore;
counterComp.innerText = computerScore;

const hand = ['paper', 'rock', 'scissors'];

array.forEach(function (element, i) {
    element.addEventListener('click', function() {
        let playerHand = hand[i];
        checkResult(playerHand, computerHand());
    });
});

disclaimerText.innerText = "Please select a hand!";

let checkResult = function(playerHand, computerHand) {
    console.log(playerHand, computerHand)
    if (playerHand === computerHand) {
        disclaimerText.innerText = "It's a tie!";
    } else if (playerHand === "paper" && computerHand === "rock") {
        disclaimerText.innerText = "You won!";
        playerScore++;
    } else if (playerHand === "rock" && computerHand === "scissors") {
        disclaimerText.innerText = "You won!";
        playerScore++;
    } else if (playerHand === "scissors" && computerHand === "paper") {
        disclaimerText.innerText = "You won!";
        playerScore++;
    } else {
        disclaimerText.innerText = "The computer has won!";
        computerScore++;
    }
    counterPlayer.innerText = playerScore;
    counterComp.innerText = computerScore;
}

let computerHand = function() {
    return hand[Math.floor(Math.random() * 3)];
}