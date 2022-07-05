const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    return myArray[~~(Math.random() * myArray.length)];
}
console.log(computerPlay(myArray))

function playRound(playerSelection, computerSelect){
    return "You Lose! Paper beats Rock"
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));