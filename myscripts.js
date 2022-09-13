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
        displayChoices(playerChoice, computerChoice);
        let result = checkRound(playerChoice, computerChoice);
        displayResult(result, playerWins, computerWins);
        //gameEnds(playerWins, computerWins)
    });
});

// Create html to show player/computer choices on screen
let playerScreenChoice = document.getElementById('playerScreenChoice');
let playerImg = document.createElement('img');
let computerScreenChoice = document.getElementById('computerScreenChoice');
let computerImg = document.createElement('img');
function displayChoices(playerChoice, computerChoice) {
    if (playerWins < 5 && computerWins <5) {
        playerImg.src = `./styles/${playerChoice}.png`;
        playerScreenChoice.appendChild(playerImg);
        computerImg.src = `./styles/${computerChoice}.png`;
        computerScreenChoice.appendChild(computerImg);
    }
}


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





let askToChoose = document.getElementById('askToChoose'); 


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
        askToChoose.style['display'] = 'none';
        playAgain();  
        if (playerWins === 5){
            result = 'Awesome! You win :)';          
        } else {
            result = 'Oh no! You lose. Maybe next time';
        }
        pResults.textContent = result;
        results.replaceChild(results.appendChild(pResults), results.childNodes[0]);
    }
}

let playAgainButton = document.getElementById('playAgain');
function playAgain(){
    playAgainButton.style['display'] = 'block';
    playAgainButton.addEventListener('click', () =>{
        playerWins = 0;
        computerWins = 0;
        displayScores(playerWins, computerWins);
        askToChoose.style['display'] = 'block';
        playAgainButton.style['display'] = 'none';
        if (results.hasChildNodes() && computerScreenChoice.hasChildNodes() && playerScreenChoice.hasChildNodes()) {
            results.removeChild(results.children[0]);
            computerScreenChoice.removeChild(computerScreenChoice.childNodes[0]);
            playerScreenChoice.removeChild(playerScreenChoice.childNodes[0]);
          }

    })
    
}