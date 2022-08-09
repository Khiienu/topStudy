const playRound = (playerSelection, computerSelection) => {
    //* this is one round. 
    let winner = 0;
    let playerScore = 0;
    let computerScore = 0;
    //* check if tie, show tie
        if(playerSelection == computerSelection) {
            winner = 2
        }
        //*Check if computer wins 
        if(
            (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
            (computerSelection === "PAPER" && playerSelection === "ROCK") ||
            (computerSelection === "SCISSORS" && playerSelection === "PAPER")  
        ){
            winner = 0
            computerScore++
        }
        else if(
            (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
            (playerSelection === "PAPER" && computerSelection === "ROCK") ||
            (playerSelection === "SCISSORS" && computerSelection === "PAPER")
        ){
            winner = 1
            playerScore++
        }
        game(winner,playerScore,computerScore)
} 



const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    if(randomNumber === 0) {
        return "ROCK"
    }
    else if(randomNumber === 1){
        return "PAPER"
    }
    else if(randomNumber === 2) {
        return "SCISSORS"
    }
    return randomNumber
}

// console.log(playRound("ROCK", getComputerChoice()))
const game = (winner,playerScore,computerScore) => {
    
        if(winner === 0){
            console.log(`this is computers score in game`)
        }
        else if(winner === 1){
            console.log(`this is players score in game`)
        }
        else if(winner === 2){
            console.log("TIE")
        }
        console.log([playerScore,computerScore])
    }

console.log(playRound("ROCK", getComputerChoice()))
