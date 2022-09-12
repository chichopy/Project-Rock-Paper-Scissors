// Create html elements and initialized them
let playerDivWins = document.getElementById('playerDivWins');
let pPlayerScores = document.createElement('p');
let playerWins = 0;
let computerDivWins = document.getElementById('computerDivWins');
let pComputerScores = document.createElement('p');
let computerWins = 0;
displayScores(playerWins, computerWins)

// Gets player choice
const buttons = document.querySelectorAll('.RPS');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.id;
        let computerChoice = getComputerChoice();
        let result = checkRound(playerChoice, computerChoice);
        displayResult(result, playerWins, computerWins);
        //gameEnds(playerWins, computerWins)
    });
});

// Gets computer choice
function getComputerChoice(){
    let Choice = Math.floor(Math.random() * 3);
    switch (Choice) {
        case 0:
            return (Choice = 'Rock');
        case 1:
            return (Choice = 'Paper');
        case 2:
            return (Choice = 'Scissors');
    }
}

// Checks result of round
function checkRound(playerChoice, computerChoice){
    let resultRound = null;
    // Checks player's and computer's choices
    if (playerWins < 5 && computerWins <5) {
        if (playerChoice === computerChoice){
            resultRound = 'It is a draw!!'
        } else if ((playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
                    (playerChoice === 'Scissors' && computerChoice === 'Paper')){
            playerWins += 1;
            pPlayerScores.textContent = playerWins;
            resultRound = `You Win! ${playerChoice} beats ${computerChoice}`;
        } else {
            computerWins += 1;
            pComputerScores.textContent = computerWins;
            resultRound = `You Lose! ${computerChoice} beats ${playerChoice}`;
        }
    }
    displayScores(playerWins, computerWins);
    return resultRound;
}

// display scores
function displayScores(playerWins, computerWins){
    pPlayerScores.textContent = `Player scores: ${playerWins}`;
    playerDivWins.appendChild(pPlayerScores);
    pComputerScores.textContent= `Computer scores: ${computerWins}`;

    computerDivWins.appendChild(pComputerScores);
}

// Displays results
function displayResult(result, playerWins, computerWins){
    // Displays tiny window with the result
    let results = document.getElementById('results');
    let pResults = document.createElement('p');
    pResults.textContent = result;
    // Updates the result every time the player press a button
    if (playerWins < 5 && computerWins <5) {
        if (result.length) {
            results.replaceChild(results.appendChild(pResults), results.childNodes[0]);
        } else{
            results.appendChild(pResults);
        }
    } else { 
        if (playerWins === 5){
            result = 'You win. Do you want to play again?';            
        } else {
            result = 'You Lose. Do you want to play again?';
        }
        pResults.textContent = result;
        results.replaceChild(results.appendChild(pResults), results.childNodes[0]);
    }
}