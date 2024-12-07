function getComputerChoice() {
    let getComputerChoice = Math.floor(Math.random() * 3);
    
    if (getComputerChoice === 0) {
        console.log("Computer selected rock.");
    } else if (getComputerChoice === 1) {
        console.log("Computer selected paper.");
    } else if (getComputerChoice === 2) {
        console.log("Computer selected scissors.");
    }
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let getHumanChoice = prompt("Please select rock, paper, or scissors. ");

    if (getHumanChoice.toLowerCase() === "rock") {
        console.log("You selected rock.");
    } else if (getHumanChoice.toLowerCase() === "paper") {
        console.log("You selected paper.");
    } else if (getHumanChoice.toLowerCase() === "scissors") {
        console.log("You selected scissors.");
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
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats rock.");
        humanScore += 1;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! Rock beats scissors.");
        computerScore += 1;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! Paper beats rock.");
        computerScore += 1;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You win! Scissors beats paper.");
        humanScore += 1;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock beats scissors.");
        humanScore += 1;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! Rock beats scissors.");
        computerScore += 1;
    } else {
        console.log("Error!"); 
    }
}
  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
  
playRound(humanSelection, computerSelection);
  