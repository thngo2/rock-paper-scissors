function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    
    if (compChoice === 0) {
        return("rock");
    } else if (compChoice === 1) {
        return("paper");
    } else if (compChoice === 2) {
        return("scissors");
    }
}

console.log(getComputerChoice());
