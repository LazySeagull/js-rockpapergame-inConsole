function GetPlayerChoice(){
    let PlayerChoice = prompt("Please enter your choice : Rock , Paper or Scissors");
    return PlayerChoice;
}

function GetComputerChoice(){
    let ComputerChoiceNumber = Math.floor(Math.random() * 3) + 1;
    if (ComputerChoiceNumber == 1){
        return "Rock";
    }
    else if (ComputerChoiceNumber == 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

// returns 1 if player won , returns 0 if compouter won , returns null if nobody won

function Points(PlayerChoice , ComputerChoice){

    if (PlayerChoice == "Rock"){
        if (ComputerChoice == "Paper"){
            return 0;
        }
        else if (ComputerChoice == "Scissors"){
            return 1;
        }
        else{
            return null;
        }
    }

    else if (PlayerChoice == "Paper"){
        if (ComputerChoice == "Rock"){
            return 1;
        }

        else if (ComputerChoice == "Scissors"){
            return 0;
        }
        else {
            return null;
        }
    }

    else{
        if (ComputerChoice == "Rock"){
            return 0;
        }

        else if (ComputerChoice == "Paper"){
            return 1;
        }

        else {
            return null;
        }
    }

}

function ScoreUpdate(ScorePlayer , ScoreComputer , Point){
    if (Point == 1){
        return [ScorePlayer +1 , ScoreComputer];
    }
    else if (Point == 0){
        return [ScorePlayer , ScoreComputer + 1];
    }
    else{
        return [ScorePlayer , ScoreComputer];
    }
}

// main

NumberOfRounds = parseInt(prompt("Enter the number of rounds : "));
let ScorePlayer = 0 , ScoreComputer = 0;

for (i=0 ; i<NumberOfRounds ; i++){
    let PlayerChoice = GetPlayerChoice();
    let ComputerChoice = GetComputerChoice();

    let Point = Points(PlayerChoice , ComputerChoice);
    [ScorePlayer , ScoreComputer] = ScoreUpdate(ScorePlayer , ScoreComputer , Point);


}


console.log(`Final Score of player is ${ScorePlayer}`);
console.log(`Final score of compouter is ${ScoreComputer}`);