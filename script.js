alert("Hello!");

function getComputerChoice() {
    // this function returns one of three randomly selected values: rock, paper, or scissors//

    let weapons = ["Rock", "Paper", "Scissors"];
    let randomWeapon = Math.floor(Math.random()* weapons.length);
    let computerSelection = weapons[randomWeapon].toLowerCase();
    return computerSelection;
    
}

function getPlayerChoice() {
    let playerSelection = prompt("Choose your weapon! Select rock, paper, or scissors.", "Choose an available weapon");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;

    // this function takes in user input in the form of one of three selectable values: rock, paper, or scissors //
    // this function returns the selected value
}

console.log(getPlayerChoice());
console.log(getComputerChoice());




//function compareSelections()
   
    //get return value of getComputerChoice and store it in a variable computerWeapon //
    //get return value of playerSelection and store it in a variable playerWeapon //
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


//function scoreboard() {
    //if computer win, +1 computer
    //if player win, +1 player
