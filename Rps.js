let cpuWin = 0;
let playerWin = 0;
for (let rounds = cpuWin + playerWin; rounds < 5; rounds++) {
// This is a random Number Generator for the CPU choice 
let randomNum = Math.floor(Math.random() * 100);
console.log("This is the randomNum: " + randomNum)

//This function takes the random Number and makes it equivalent to Rock Paper or Scissors
function cpuChoice() {
if (randomNum <= 100/3) {
    return "R";
  }
else if (randomNum <= 100 * (2/3) && randomNum >= 100/3) {
    return "P";
  }
else {
    return "S";
  }
}

console.log("This is CPU choice: " + cpuChoice())

// This prompts the player to enter a choice 
let playerChoice = prompt("Enter the corresponding letter of your choice R = Rock P = Paper S = Scissors");
console.log("This is the player Choice: " + playerChoice)

// This combines the choices of the computer and the Player to generate a string = to the round Result
let roundResult = cpuChoice() + playerChoice;
console.log("This is the round result: " + roundResult)


// This takes the round result and converts to a string informing who won the game additionally it adds wins to win counters above
function roundWin(roundResult) {

  if (roundResult == "SS" || roundResult == "PP" || roundResult == "RR") {
    return "Round is a draw";
  }
  else if (roundResult == "SP" || roundResult == "PR" || roundResult == "RS") {
    cpuWin++;
    return "CPU wins";
  } 
  else if (roundResult == "RP" || roundResult == "PS" || roundResult == "SR") {
    playerWin++;
    return "Player wins";
  }
}
// This converts the Round result into a pritable outcome
let outcome = roundWin(roundResult);

console.log("This is the outcome: " + outcome)
console.log(cpuWin)
console.log(playerWin)
}

