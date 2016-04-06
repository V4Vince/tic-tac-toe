'use strict';

let topRow = [$("#one"), $("#two"), $("#three")];
let middleRow = [$("#four"), $("#five"), $("#six")];
let bottomRow = [$("#seven"), $("#eight"), $("#nine")];
let firstCol = [$("#one"), $("#four"), $("#seven")];
let secondCol = [$("#two"), $("#five"), $("#eight")];
let thirdCol = [$("#three"), $("#six"), $("#nine")];
let diagonalOne = [$("#one"), $("#five"), $("#nine")];
let diagonalTwo = [$("#three"), $("#five"), $("#seven")];


let currentSquare;
let turns = 0;
let currentPlayer = null;
let playerX = 'X';
let playerO = 'O';
let gameOver = false;
let playerXCounter = 0;


const checkConditions = function(winCondition){
  for (var i = 0; i < winCondition.length; i++) {
    if (winCondition[i].hasClass("playerX")) {
      console.log(playerXCounter++);
    } else if(winCondition[i].hasClass("playerO")){
      console.log(playerXCounter--);
    }
  }//for
};//checkWinner

//Displays Winner
const displayWinner = function(){
  if (turns === 9) {
    gameOver = true;
    console.log("Its a draw!");
  } else if (playerXCounter === 3) {
    gameOver = true;
    console.log("Player X Wins");
    playerXCounter = 0;
  } else if (playerXCounter === -3) {
    gameOver = true;
    console.log("Player O Wins");
    playerXCounter = 0;
  } else {
    playerXCounter = 0;
  }
  return gameOver;
};

const getWinner = function(){
  if (turns >= 4) {
    checkConditions(topRow);
    displayWinner();
    checkConditions(middleRow);
    displayWinner();
    checkConditions(bottomRow);
    displayWinner();
    checkConditions(firstCol);
    displayWinner();
    checkConditions(secondCol);
    displayWinner();
    checkConditions(thirdCol);
    displayWinner();
    checkConditions(diagonalOne);
    displayWinner();
    checkConditions(diagonalTwo);
    displayWinner();
  }
};

const newGame = function(){
  if (gameOver === true) {
    $('.squares').each(function(){
      $(this).removeClass('playerX', 'playerO').text('').addClass('empty');
    });
  }
};

//MAIN BLOCK ------------------------------------------------------------------
//Listens for clicks on squares
$('.gameboard').find('.squares').click(function(){
  currentSquare = $(this);

//if the clicked square is has 'empty' class and the turn is even, then place 'playerX' class
  if (currentSquare.hasClass("empty")) {
    if (turns % 2 === 0) {
      currentPlayer = playerX;
      currentSquare.removeClass("empty").text(currentPlayer).addClass("playerX");
      turns++;
    //else place a 'playerO' class
    } else {
      currentPlayer = playerO;
      currentSquare.removeClass("empty").text(currentPlayer).addClass("playerO");
      turns++;
    }//else
  }//if

  getWinner();

  newGame();

});



module.exports = true;
