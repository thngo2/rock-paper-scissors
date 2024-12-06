function getComputerChoice() {
    let getComputerChoice = Math.floor(Math.random() * 3);
    
    if (getComputerChoice === 0) {
        return("Computer selected rock.");
    } else if (getComputerChoice === 1) {
        return("Computer selected paper.");
    } else if (getComputerChoice === 2) {
        return("Computer selected scissors.");
    }
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let getHumanChoice = prompt("Please select rock, paper, or scissors.");

    if (getHumanChoice.toLowerCase() === "rock") {
        return("You selected rock.");
    } else if (getHumanChoice.toLowerCase() === "paper") {
        return("You selected paper.");
    } else if (getHumanChoice.toLowerCase() === "scissors") {
        return("You selected scissors.");
    } else {
        return("Invalid choice. Please select rock, paper, or scissors.");
    }
}

// console.log(getHumanChoice());

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    if (computerChoice === "rock" && humanChoice === "rock") {
        console.log("You tied!");
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats rock.");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! Rock beats scissors.");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! Paper beats rock.");
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        console.log("You tied!");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You win! Scissors beats paper.");
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock beats scissors.");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! Rock beats scissors.");
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
        console.log("You tied!");
    } else {
        console.log("Error!"); 
    }
  }
  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
  
playRound(humanSelection, computerSelection);
  