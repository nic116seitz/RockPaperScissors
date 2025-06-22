let roundOutcome = roundWin("RP")
function roundWin(roundResult) {
console.log(roundResult)
  if (roundResult == "SS" || roundResult == "PP" || roundResult == "RR") {
    return "Round is a draw";
  }
  else if (roundResult == "SP" || roundResult == "PR" || roundResult == "RS") {
     return "CPU wins";
  } 
  else if (roundResult == "RP" || roundResult == "PS" || roundResult == "SR") {
    return "Player wins";
  }
}

console.log(roundOutcome)
