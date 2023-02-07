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

    for (let i = 0; i < 5; i ++) {

    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    
         function playRound (computerSelection, playerSelection) {
            console.log("The computer chose " + computerSelection);
            //checker();
            console.log("You chose " + playerSelection);
            
            let computerScore = 0;
            let playerScore = 0;

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

                console.log("You scored " + playerScore + " points.")
                console.log("The computer scored " + computerScore + " points.")

            

        }

        playRound (computerSelection, playerSelection);
    }
}

game();