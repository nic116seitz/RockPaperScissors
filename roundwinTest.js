let roundResult = ""
function roundWin(roundResult) {
console.log(roundResult)
  if (roundResult === "SS" || "PP" || "RR") {
    return "Round is a draw";
  }
  else if (roundResult === "SP" || "PR" || "RS") {
     return "CPU wins";
  } 
  else if (roundResult === "RP" || "PS" || "SR") {
    return "Player wins";
  }
}

let roundOutcome = roundWin("SP")
console.log(roundOutcome)
