const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const counterPlayer = document.getElementById('user');
const counterComp = document.getElementById('comp');
const disclaimer = document.getElementById('disclaimer');
const disclaimerText = document.getElementById('disclaimer-text');
const counterMoney = document.getElementById('money');

const array = [rock, paper, scissors];

let playerScore = 0;
let computerScore = 0;
let moneyPlayer = 0;

counterMoney.innerText = moneyPlayer;
counterPlayer.innerText = playerScore;
counterComp.innerText = computerScore;

const hand = ['paper', 'rock', 'scissors'];

array.forEach(function(element, i) {
    element.addEventListener('click', function() {
        disableOtherClicks(this, 3000);
        let playerHand = hand[i];
        checkResult(playerHand, computerHand());
    });
});

function timerMessage() {
    setTimeout(() => {
        disclaimerText.innerText = "Please select a hand!";
    }, 2500);
}

disclaimerText.innerText = "Please select a hand!";

let checkResult = function(playerHand, computerHand) {
    let message = disclaimerText.innerHTML = "PLAYER: " + playerHand + "<br> COMPUTER: " + computerHand;
    console.log(playerHand, computerHand)
    if (playerHand === computerHand) {
        message;

        setTimeout(() => {
            disclaimerText.innerText = "It's a tie!";
        }, 1500);

        timerMessage()
    } else if (playerHand === "paper" && computerHand === "rock") {
        message;

        setTimeout(() => {
            disclaimerText.innerText = "You won!";
        }, 1500);

        timerMessage()
        playerScore++;
        moneyPlayer += 3;
    } else if (playerHand === "rock" && computerHand === "scissors") {
        message;

        setTimeout(() => {
            disclaimerText.innerText = "You won!";
        }, 1500);

        timerMessage()
        playerScore++;
        moneyPlayer += 3;
    } else if (playerHand === "scissors" && computerHand === "paper") {
        message;

        setTimeout(() => {
            disclaimerText.innerText = "You won!";
        }, 1500);

        timerMessage()
        playerScore++;
        moneyPlayer += 3;
    } else {
        message;

        setTimeout(() => {
            disclaimerText.innerText = "The computer has won!";
        }, 1500);

        timerMessage()
        computerScore++;
        moneyPlayer -= 1;
    }
    counterPlayer.innerText = playerScore;
    counterComp.innerText = computerScore;
    counterMoney.innerText = moneyPlayer;
}

let computerHand = function() {
    return hand[Math.floor(Math.random() * 3)];
}

function disableOtherClicks(clickedElement, duration) {
    array.forEach(function(element) {
        if (element !== clickedElement) {
            element.style.pointerEvents = 'none';
        } else {
            element.style.pointerEvents = 'none';
        }
    });

    setTimeout(function() {
        array.forEach(function(element) {
            if (element !== clickedElement) {
                element.style.pointerEvents = 'auto';
            } else {
                element.style.pointerEvents = 'auto';
            }
        });
    }, duration);
}