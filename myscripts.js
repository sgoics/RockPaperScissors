const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    return myArray[~~(Math.random() * myArray.length)];
}
console.log(computerPlay(myArray))

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection){
        return ("Tie game!");
    }else if
        (computerSelection == "rock" && playerSelection == "scissors"){
            return ("Rock crushes scissors, you lose!");
        }else if 
        (computerSelection == "scissors" && playerSelection == "paper"){
            return ("Scissors cut paper, you lose!");
        }else if
        (computerSelection == "paper" && playerSelection == "rock"){
            return ("Paper covers rock, you lose!");
        }
        console.log(playRound(playerSelection, computerSelection));
}


