//Data

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const counterPlayer = document.getElementById('user');
const counterComp = document.getElementById('comp');
const disclaimer = document.getElementById('disclaimer');
const disclaimerText = document.getElementById('disclaimer-text');
const computerSelected = document.getElementById('computer-select');
const userSelect = document.getElementById('user-select');
const counterMoney = document.getElementById('money');

const textComputerSelected = "your Select :";
const textUserSelected = "computer Select :";

const array = [rock, paper, scissors];

let playerScore = 0;
let computerScore = 0;
let moneyPlayer = 0;

counterMoney.innerText = moneyPlayer;
counterPlayer.innerText = playerScore;
counterComp.innerText = computerScore;

const hand = ['paper', 'rock', 'scissors'];


//Game
array.forEach((element, i) => {
    element.addEventListener('click', function playRound() {
        console.log(playRound);
        body = document.querySelector("body")
        body.style.pointerEvents = "none"
        setTimeout(() => {
            let playerHand = hand[i];
            checkResult(playerHand, computerHand());
            body.style.pointerEvents = "auto"
        }, 2000);
    });

});

function timerMessage() {
    setTimeout(() => {
        disclaimerText.innerText = "Please select a hand!";
    }, 2500);
}

disclaimerText.innerText = "Please select a hand!";

let checkResult = function (playerHand, computerHand, userSelected) {
    if (playerHand === computerHand) {
        selectedText(textUserSelected + playerHand, computerSelected)
        selectedText(textComputerSelected + computerHand, userSelect)
        disclaimText("Try")
    } else if (playerHand === "paper" && computerHand === "rock") {
        selectedText(textUserSelected + playerHand, computerSelected)
        selectedText(textComputerSelected + computerHand, userSelect)
        disclaimText("You won!")
        playerScore++;
    } else if (playerHand === "rock" && computerHand === "scissors") {
        selectedText(textUserSelected + playerHand, computerSelected)
        selectedText(textComputerSelected + computerHand, userSelect)
        disclaimText("You won!")

        playerScore++;
    } else if (playerHand === "scissors" && computerHand === "paper") {
        selectedText(textUserSelected + playerHand, computerSelected)
        selectedText(textComputerSelected + computerHand, userSelect)
        disclaimText("You won!")
        playerScore++;
    } else {
        disclaimText("You lose!")
        computerScore++;
    }
    counterPlayer.innerText = playerScore;
    counterComp.innerText = computerScore;
    counterMoney.innerText = moneyPlayer;
}

//function

let computerHand = function () {
    return hand[Math.floor(Math.random() * 3)];
}


function disclaimText(text) {
    disclaimerText.innerText = text;
}

function selectedText(text, container) {
    container.innerText = text
    
}
