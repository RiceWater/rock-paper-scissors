const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getComputerChoice(){
    let choice = (Math.floor(Math.random() * 10) + 1) % 3
    switch (choice){
        case 0:
            return ROCK;
        case 1:
            return SCISSORS;
        default:
            return PAPER;
    }
}

function playGame(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice == computerChoice){
        return "Draw";
    }
    switch (playerChoice){
        case ROCK:
            return (computerChoice == SCISSORS) ? "Player Wins!" : "Computer Wins!";
        case SCISSORS:
            return (computerChoice == PAPER) ? "Player Wins!" : "Computer Wins!";
        default: //PAPER
            return (computerChoice == ROCK) ? "Player Wins!" : "Computer Wins!";
    }
}

for(let i = 0; i < 5; i++){
    let choice = prompt("Rock, paper, or scissors?")
    compChoice = getComputerChoice();
    console.log(playGame(choice, compChoice));
}
