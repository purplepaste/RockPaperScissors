alert("Hello!");

function getComputerChoice() {
    // this function returns one of three randomly selected values: rock, paper, or scissors//

    let weapons = ['rock', 'paper', 'scissors'];
    let randomWeapon = Math.floor(Math.random()* weapons.length);
    let computerSelection = weapons[randomWeapon];
    return computerSelection;
    
}

function getPlayerChoice() {
    // this function takes in user input in the form of one of three selectable values: rock, paper, or scissors //
    // this function returns the selected value

    let input = prompt("Choose your weapon! Select rock, paper, or scissors.");
    let playerSelection = input.toLowerCase();
    return playerSelection;
    
    
}
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

//function checker(playerSelection) {
// this function takes in playerselection, 
//compares it to one of the three available weapons, 
//and asks for input if it is not equal to "rock", "paper", or "scissors".

    //if (playerSelection != "rock" || "paper" || "scissors") {
      //  console.log("Please chose an available weapon")
        //getPlayerChoice();
    //}
  //  else return;
//

function game (computerSelection, playerSelection) {

    //function compareSelections combined into "game" function
   
    //get return value of computerSelection
    //get return value of playerSelection 
    //compare computerWeapon to playerWeapon:
        //if computerWeapon = rock && playerWeapon = rock, tie
        //if computerWeapon = rock && playerWeapon = paper, player wins
        //if computerWeapon = rock && playerWeapon = scissors, computer wins 
        //if computerWeapon = paper && playerWeapon = rock, computer wins  
        //if computerWeapon = paper && playerWeapon = paper, tie
        //if computerWeapon = paper && playerWeapon = scissors, player wins  
        //if computerWeapon = scissors && playerWeapon = rock, player wins
        //if computerWeapon = scissors && playerWeapon = paper, computer wins
        //if computerWeapon = scissors && playerWeapon = scissors, tie

    console.log("The computer chose " + computerSelection);
    //checker();
    console.log("You chose " + playerSelection);
    
        if (computerSelection == "rock" && playerSelection == "paper"){
            console.log("You win!");
        }

        else if (computerSelection == "rock" && playerSelection == "scissors") {
            console.log("The Computer wins!");
        }

        else if (computerSelection == "paper" && playerSelection == "rock") {
            console.log("The Computer wins!");
        }

        else if (computerSelection == "paper" && playerSelection == "scissors") {
            console.log("You win!");
        }

        else if (computerSelection == "scissors" && playerSelection == "rock") {
            console.log("You win!");
        }

        else if (computerSelection == "scissors" && playerSelection == "paper") {
            console.log("The Computer wins!");
        }
        
        else if (computerSelection == playerSelection) {
            console.log("It's a tie!");
        }

    }

game(computerSelection, playerSelection);


//function scoreboard() {
    //if computer win, +1 computer
    //if player win, +1 player
