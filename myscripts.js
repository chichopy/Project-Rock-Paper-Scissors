
function getComputerChoice(){
    let Choice = Math.floor(Math.random() * 3);
    switch (Choice){
        case 0:
            return (Choice = 'Rock');
        case 1:
            return (Choice = 'Paper');
        case 2:
            return (Choice = 'Scissors');
    }
}

function round(){
    let computerChoice = getComputerChoice();
    let playerChoice = prompt('Choose your weapon').toLowerCase()
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)

    let result = null;

    if (playerChoice === computerChoice){
        draws += 1;
        return (result = 'It is a draw!!')
    }else if ((playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === 'Scissors' && computerChoice === 'Paper')){
        playerWins += 1;
        return (result = `You Win! ${playerChoice} beats ${computerChoice}`)
    } else{
        computerWins += 1;
        return (result = `You Lose! ${computerChoice} beats ${playerChoice}`)
    }
}

let playerWins = 0;
let computerWins = 0;
let draws = 0;


for (let i = 0; i <= 4; i++){
    result = round(playerWins, computerWins, draws);
}

let finalResult = null
if (playerWins > computerWins){
    finalResult = `You Win! Stats: \n Wins: ${playerWins} \n Loses: ${computerWins} \n Draws: ${draws}`
} else if (playerWins === computerWins){
    finalResult = 'I cannot believe it was a tie!  Stats: \n Wins: ${playerWins} \n Loses: ${computerWins} \n Draws: ${draws}'
} else{
    finalResult = `You Lose with! Stats: \n Wins: ${playerWins} \n Loses: ${computerWins} \n Draws: ${draws}`
}
