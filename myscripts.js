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

// Display 0 in initialized scores
let playerDivWins = document.getElementById('playerDivWins');
let pPlayerScores = document.createElement('p');
let playerWins = 0;
pPlayerScores.textContent = playerWins;
playerDivWins.appendChild(pPlayerScores);
let computerDivWins = document.getElementById('computerDivWins');
let pComputerScores = document.createElement('p');
let computerWins = 0;
pComputerScores.textContent = computerWins;
computerDivWins.appendChild(pComputerScores);

const buttons = document.querySelectorAll('button');
// Gets player choice
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.id;
        let computerChoice = getComputerChoice();
        let result = null;

        // Checks player's and computer's choices
        if (playerChoice === computerChoice){
            result = 'It is a draw!!'
        } else if ((playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === 'Scissors' && computerChoice === 'Paper')){
            playerWins += 1;
            pPlayerScores.textContent = playerWins;
            playerDivWins.appendChild(pPlayerScores);
    
            result = `You Win! ${playerChoice} beats ${computerChoice}`;
        } else {
            computerWins += 1;
            pComputerScores.textContent = computerWins;
            computerDivWins.appendChild(pComputerScores);
            result = `You Lose! ${computerChoice} beats ${playerChoice}`;
        }

        // Displays tiny window with the result
        let results = document.getElementById('results');
        let pResults = document.createElement('p');
        pResults.textContent = result;
        // Updates the result every time the player press a button
        if (result.length) {
            results.replaceChild(results.appendChild(pResults), results.childNodes[0]);
        } else{
            results.appendChild(pResults);
        }

        if(playerWins === 5 || computerWins === 5){
            if (playerWins === 5){
                result = 'You win';
                pResults.textContent = result;
                results.replaceChild(results.appendChild(pResults), results.childNodes[0]);
                
            } else {
                result = 'You Lose';
                pResults.textContent = result;
                results.replaceChild(results.appendChild(pResults), results.childNodes[0]);
            }
        }

        buttons.forEach((button) => {
            if (playerWins === 5 || computerWins === 5) {
                document.getElementById("Rock").disabled = true;
                document.getElementById("Paper").disabled = true;
                document.getElementById("Scissors").disabled = true;
            }
        });


    });
});

