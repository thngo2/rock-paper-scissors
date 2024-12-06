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
    let getHumanChoice = prompt("Please select rock (0), paper (1), or scissors (2).");

    if (getHumanChoice === "0" || getHumanChoice.toLowerCase() === "rock") {
        return("You selected rock.");
    } else if (getHumanChoice === "1" || getHumanChoice.toLowerCase() === "paper") {
        return("You selected paper.");
    } else if (getHumanChoice === "2" || getHumanChoice.toLowerCase === "scissors") {
        return("You selected scissors.");
    } else {
        return("Invalid choice. Please select rock (0), paper (1), or scissors (2).");
    }
}

console.log(getHumanChoice());

// var humanScore = 0;
// var computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//     let computerChoice = getComputerChoice();
//     let humanChoice = getHumanChoice();

    
//   }
  
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
  
// playRound(humanSelection, computerSelection);
  