const playRound = (playerSelection, computerSelection) => {
    //* this is one round. 
    let winner = 0;
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
    }
    else if(
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ){
        winner = 1
    }
    return winner
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
const game = (pSelection,cSelection) => {
    let winner = 5;
    let player = 0;
    let computer = 0;
    for(let i = 0; i < winner; i++){
        if(playRound(pSelection,cSelection) === 0){
            computer++
            console.log(`this is computers score ${computer}`)
        }
        else if(playRound(pSelection,cSelection) === 1){
            player++
            console.log(`this is players score ${player}`)
        }
        else if(playRound(pSelection,cSelection) === 2){
            return "TIED"
        }
    }
    return [computer,player]
}
console.log(game("ROCK", getComputerChoice()))
