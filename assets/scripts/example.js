'use strict';

const gameData = require('./auth/game-data');
const events = require('./auth/events');

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
let winner = '';

const checkConditions = function(winCondition){
  for (let i = 0; i < winCondition.length; i++) {
    if (winCondition[i].hasClass("playerX")) {
      playerXCounter++;
    } else if(winCondition[i].hasClass("playerO")){
      playerXCounter--;
    }
  }//for
};//checkWinner

//Displays Winner
const displayWinner = function(){
    if (playerXCounter === 3) {
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

const showWinner = function (){
  if (playerXCounter === 3) {
    winner = 'X Wins';
  } else if (playerXCounter === -3){
    winner = 'O Wins';
  } else {
    winner = 'Cat\'s Game';
  }
};

const getWinner = function(){
  if (turns >= 4 && turns <= 9) {
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
  } else if (turns === 9){
    $('.display-winner').find('h2').text(winner);
    showWinner();
  }
};

let player1 = $('.players').find('.playerX');
let player2 = $('.players').find('.playerO');

const newGame = function(){
    $('.squares').each(function(){
      $(this).removeClass('playerX').text('').addClass('empty');
      $(this).removeClass('playerO').text('').addClass('empty');
      player2.removeClass('playerOindic');
      player1.addClass('playerXindic');
      turns = 0;
    });

};

//MAIN BLOCK ------------------------------------------------------------------
//Listens for clicks on squares
player1.addClass('playerXindic');
$('.gameboard').find('.squares').click(function(event){
  event.preventDefault;
  currentSquare = $(this);
//if the clicked square is has 'empty' class and the turn is even, then place 'playerX' class
  if (currentSquare.hasClass("empty")) {
    if (turns % 2 === 0) {
      currentPlayer = playerX;
      currentSquare.removeClass("empty").text(currentPlayer).addClass("playerX");
      player1.removeClass('playerXindic');
      player2.addClass('playerOindic');
      turns++;
    //else place a 'playerO' class
    } else {
      currentPlayer = playerO;
      currentSquare.removeClass("empty").text(currentPlayer).addClass("playerO");
      player2.removeClass('playerOindic');
      player1.addClass('playerXindic');
      turns++;
    }//else
  }//if

  gameData.gameIndex = currentSquare.attr('data-id');
  gameData.gameValue = currentSquare.text();
  events.patchGame();
  getWinner();

});

$('#new-game').on('click', function (event) {
  event.preventDefault();
  newGame();
});


module.exports = true;
