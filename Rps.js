// let rounds = 0; 
// playerChoice = alert(prompt("Enter a letter of your choice (R = rock S = Scissors P = Paper)"));
// function randomNum(){
//  return (Math.random() * 100)
//}
let randomNum = 70;// Math.floor(Math.random() * 100);
console.log("This is the randomNum: " + randomNum)

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

let playerChoice = prompt("Enter the corresponding letter of your choice R = Rock P = Paper S = Scissors")
console.log("This is the player Choice: " + playerChoice)

let roundResult = cpuChoice() + playerChoice
console.log("This is the round result: " + roundResult)

let cpuWin = 0
let playerWin = 0

function roundWin(roundResult) {
   let cpuWin = 0
   let playerWin = 0

  if (roundResult == "SS" || roundResult == "PP" || roundResult == "RR") {
    return "Round is a draw";
  }
  else if (roundResult == "SP" || roundResult == "PR" || roundResult == "RS") {
     cpuWin += 1
     return "CPU wins";
  } 
  else if (roundResult == "RP" || roundResult == "PS" || roundResult == "SR") {
    playerWin += 1
    return "Player wins";
  }
}

let outcome = roundWin()
console.log("This is the outcome: " + outcome)
console.log(cpuWin)
console.log(playerWin)
