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

function updateScores(winner){
    const playerScore = document.querySelector("#playerScore");
    const compScore = document.querySelector("#compScore");
    let pScoreInt = parseInt(playerScore.textContent);
    let cScoreInt = parseInt(compScore.textContent);
    
    switch (winner){
        case "player":
            playerScore.textContent = ++pScoreInt;
            break;
        case "comp":
            compScore.textContent = ++cScoreInt;
            break;
        default:
            break;
    }

    if (pScoreInt >= 5){
        playerScore.textContent = 0;
        compScore.textContent = 0;
        return announceVictor("player");
    } 
    if (cScoreInt >= 5){
        playerScore.textContent = 0;
        compScore.textContent = 0;
        return announceVictor("comp");
    }
    return "";
}

function announceVictor(victor){
    switch (victor){
        case "player":
            return "YOU ARE THE VICTOR";
        case "comp":
            return "COMPUTER IS THE VICTOR"
        default:
            return "";
    }
}
const menu = document.querySelector("#choices");
menu.addEventListener('click', (event) => {
    const tar = event.target.id;
    switch (tar){
        case ROCK:
            playRound(ROCK);
            break;
        case SCISSORS:
            playRound(SCISSORS)
            break;
        default:
            playRound(PAPER);
            break;        
    }
})

function playRound(playerChoice){
    const compChoice = getComputerChoice();
    const resultDiv = document.querySelector("#result");
    const res = playGame(playerChoice, compChoice);

    const victor = (res === "Player Wins!") ? updateScores("player") : updateScores("comp");
    resultDiv.textContent = victor;

}
// for(let i = 0; i < 5; i++){
//     let choice = prompt("Rock, paper, or scissors?")
//     compChoice = getComputerChoice();
//     console.log(playGame(choice, compChoice));
// }
