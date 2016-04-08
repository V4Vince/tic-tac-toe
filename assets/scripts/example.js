'use strict';

const gameData = require('./auth/game-data');
const events = require('./auth/events');

//win conditions
let topRow = [$("#one"), $("#two"), $("#three")];
let middleRow = [$("#four"), $("#five"), $("#six")];
let bottomRow = [$("#seven"), $("#eight"), $("#nine")];
let firstCol = [$("#one"), $("#four"), $("#seven")];
let secondCol = [$("#two"), $("#five"), $("#eight")];
let thirdCol = [$("#three"), $("#six"), $("#nine")];
let diagonalOne = [$("#one"), $("#five"), $("#nine")];
let diagonalTwo = [$("#three"), $("#five"), $("#seven")];

//globals
let currentSquare;
let turns = 0;
let currentPlayer = null;
let playerX = 'X';
let playerO = 'O';
let gameOver = false;
let playerXCounter = 0;

//checks all 8 win conditions and increments playercounter for every X and decrements for every O
const checkConditions = function(winCondition){
  for (let i = 0; i < winCondition.length; i++) {
    if (winCondition[i].hasClass("playerX")) {
      playerXCounter++;
    } else if(winCondition[i].hasClass("playerO")){
      playerXCounter--;
    }
  }
};

//hides the board and the player indicator
const hideErthang = function (){
  $('.gameboard').hide();
  $('.players').find('.playerName').hide();
};

//shows the board and player indicator
const showErthang = function (){
  $('.gameboard').show();
  $('.players').find('.playerName').show();
  $('.notify').empty();
};

//When the player counter reaches either 3 or -3, calls hideErthang and display winner
//resets player counter
const displayWinner = function(){
    if (playerXCounter === 3) {
    gameOver = true;
    hideErthang();
    $('.notify').text("Player-X Wins!!!").addClass("bigLetters");
    playerXCounter = 0;
  } else if (playerXCounter === -3) {
    gameOver = true;
    hideErthang();
    $('.notify').text("Player-O Wins!!!").addClass("bigLetters");
    playerXCounter = 0;
  } else {
    playerXCounter = 0;
  }
};

//for turns between 4 and 9, check the conditons and tell me who won
const getWinner = function(){
  if (turns >= 4 && gameOver === false) {
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

//inserts each players HTML into their varibles
let player1 = $('.players').find('.playerX');
let player2 = $('.players').find('.playerO');

//resets the board
const cleanSlate = function(){
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
//if the clicked square is has 'empty' class and the turn is even, then insert 'playerX' class
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
    }
  }

//grab the currentsquare's index and value
  gameData.gameIndex = currentSquare.attr('data-id');
  gameData.gameValue = currentSquare.text();
//then send the data to the server
  events.patchGame();

//tell me who won
  getWinner();

  if (gameOver === false && turns === 9) {
    hideErthang();
    $('.notify').text("Cat\'s Game").addClass("bigLetters");
    playerXCounter = 0;
  }
});

// When new game button is clicked, set the board conidtions to original
$('#new-game').on('click', function (event) {
  event.preventDefault();
  showErthang();
  cleanSlate();
  gameOver = false;
});


module.exports = true;
