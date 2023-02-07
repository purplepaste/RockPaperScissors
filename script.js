alert("Hello!");

//const computerSelection = getComputerChoice();
//const playerSelection = getPlayerChoice();

//unction checker(playerSelection) {
// this function takes in playerselection, 
//compares it to one of the three available weapons, 
//and asks for input if it is not equal to "rock", "paper", or "scissors".

    //if (playerSelection != "rock" || "paper" || "scissors") {
      //  console.log("Please chose an available weapon")
        //getPlayerChoice();
  //  else return;
//

function getComputerChoice() {
    let weapons = ['rock', 'paper', 'scissors'];
    let randomWeapon = Math.floor(Math.random()* weapons.length);
    let computerSelection = weapons[randomWeapon];
    return computerSelection;
    }   

function getPlayerChoice() {    
    let input = prompt("Choose your weapon! Select rock, paper, or scissors.");
    let playerSelection = input.toLowerCase();
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

        else console.log("The match is a draw. May man and machine find peace and harmony on earth.");
    }

    for (let i = 0; i < 5; i ++) {

        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();

        function checker (playerSelection) {
            if (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors") {
                console.log("Please choose one of the available weapons.")
                computerSelection = null;
            }
            getPlayerChoice;
        }
        
        
        
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
            console.log("It's a tie!");
            }
        
                    
        }
    
    checker(playerSelection);
    playRound (computerSelection, playerSelection);
    }  

    scoreBoard(computerScore, playerScore);

}


game();