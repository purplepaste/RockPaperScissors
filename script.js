
function getComputerChoice() {
    let weapons = ['rock', 'paper', 'scissors'];
    let randomWeapon = Math.floor(Math.random()* weapons.length);
    let computerSelection = weapons[randomWeapon];
    return computerSelection;
    }   

function getPlayerChoice() {    
    let input = prompt("Choose your weapon! Select rock, paper, or scissors.");
    let playerSelection = input.toLowerCase();
    while ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {
        input = prompt("Please choose an available weapon!");
        playerSelection = input.toLowerCase();
        }
    //console.log(playerSelection);
    return playerSelection;
    }

function game(){
    let computerScore = 0;
    let playerScore = 0;

    function scoreBoard (computerScore, playerScore) {
        if (computerScore > playerScore) {
            console.log("The computer scored " + computerScore + " points this match.");
            console.log("You scored " + playerScore + " points this match.");
            console.log("The machines have won!");
        }

        else if (computerScore < playerScore) {
            console.log("The computer scored " + computerScore + " points this match.");
            console.log("You scored " + playerScore + " points this match.");
            console.log("You have secured victory for the humans!");
        }

    }

    for (let i = 0; i < 5; i ++) {

        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        
        function playRound (computerSelection, playerSelection) {   
            console.log("The computer chose " + computerSelection);
            console.log("You chose " + playerSelection);  
            
            if (computerSelection == "rock" && playerSelection == "paper"){
            console.log("You win!");
            playerScore ++;
            }
            else if (computerSelection == "rock" && playerSelection == "scissors") {
            console.log("The Computer wins!");
            computerScore ++;
                    
            }

            else if (computerSelection == "paper" && playerSelection == "rock") {
            console.log("The Computer wins!");
            computerScore ++;
            }

            else if (computerSelection == "paper" && playerSelection == "scissors") {
            console.log("You win!");
            playerScore ++;
            }

            else if (computerSelection == "scissors" && playerSelection == "rock") {
            console.log("You win!");
            playerScore ++;
            }
            
            else if (computerSelection == "scissors" && playerSelection == "paper") {
            console.log("The Computer wins!");
            computerScore ++;
            }
                    
            else if (computerSelection == playerSelection) {
            console.log("It's a tie! Go again!");
            i--;
            }
        
                    
        }
    
    
    
    playRound (computerSelection, playerSelection);
    }  

    scoreBoard(computerScore, playerScore);

}


game();