function getComputerChoice() {
    let getComputerChoice = Math.floor(Math.random() * 3);
    
    if (getComputerChoice === 0) {
        console.log("Computer selected rock.");
        return("rock");
    } else if (getComputerChoice === 1) {
        console.log("Computer selected paper.");
        return("paper");
    } else if (getComputerChoice === 2) {
        console.log("Computer selected scissors.");
        return("scissors");
    }
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let getHumanChoice = prompt("Please select rock, paper, or scissors. ");

    if (getHumanChoice.toLowerCase() === "rock") {
        console.log("You selected rock.");
        return("rock");
    } else if (getHumanChoice.toLowerCase() === "paper") {
        console.log("You selected paper.");
        return("paper");
    } else if (getHumanChoice.toLowerCase() === "scissors") {
        console.log("You selected scissors.");
        return("scissors");
    } else {
        console.log("Invalid choice. Please select rock, paper, or scissors.");
    }
}

// console.log(getHumanChoice());

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if ((computerChoice === "rock" && humanChoice === "rock") ||  
    (computerChoice === "paper" && humanChoice === "paper") ||  
    (computerChoice === "scissors" && humanChoice === "scissors")) {
        console.log("You tied!");
        console.log("Score: " + humanScore + " - " + computerScore);
        console.log("");
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        console.log("You win! Paper beats rock.");
        console.log("Score: " + humanScore + " - " + computerScore);
        console.log("");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        console.log("You lose! Rock beats scissors.");
        console.log("Score: " + humanScore + " - " + computerScore);
        console.log("");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        console.log("You lose! Paper beats rock.");
        console.log("Score: " + humanScore + " - " + computerScore);
        console.log("");
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        console.log("You win! Scissors beats paper.");
        console.log("Score: " + humanScore + " - " + computerScore);
        console.log("");
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        console.log("You win! Rock beats scissors.");
        console.log("Score: " + humanScore + " - " + computerScore);
        console.log("");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        console.log("You lose! Scissors beats paper.");
        console.log("Score: " + humanScore + " - " + computerScore);
        console.log("");
    } else {
        console.log("Error!"); 
        console.log("");
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("GAME OVER");
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("GAME OVER");
        console.log("Computer wins!");
    } else if (humanScore === computerScore) {
        console.log("GAME OVER");
        console.log("Tie!");
    }
}

playGame();

