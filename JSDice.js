
let firstDice;
let secondDice;
let diceRoll;
let getRandom;
let randomNumberHigh;
let randomNumberLow;
const diceSound = new Audio("dicerollsoundeffect_cutted.mp3")
const rollButton = document.getElementById('rollButton');
//document.addEventListener("DOMContentLoaded","loaded");


function rollDiceAgain(){
    diceSound.play();
    firstDice = Math.floor(((Math.random())*6)+1);
    secondDice = Math.floor(((Math.random())*6)+1);
    diceRoll = firstDice + secondDice;
    alert("You rolled "+ diceRoll +"." );
}


