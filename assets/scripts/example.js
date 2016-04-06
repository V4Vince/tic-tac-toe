'use strict';
/*
let winCondition = [0, 1, 2], [3, 4, 5], [6, 7, 8],//rows
                   [0, 3, 6], [1, 4, 5], [2, 5, 8],//columns
                   [1, 5, 9], [3, 5, 7];//across
*/
/*
let gameBoard = [$("#one"), $("#two"), $("#three"),
                 $("#four"), $("#five"), $("#six"),
                  $("#seven"), $("#eight"), $("#nine")];

let topRow = [$("#one"), $("#two"), $("#three")];
let middleRow = [$("#four"), $("#five"), $("##six")];
let bottomRow = [$("#seven"), $("#eight"), $("#nine")];
let firstCol = [$("#one"), $("#four"), $("#seven")];
let secondCol = [$("#two"), $("#five"), $("#eight")];
let thirdCol = [$("#three"), $("#six"), $("#nine")];
*/

let topRow = [$("#one"), $("#two"), $("#three")];

let currentSquare;
let turns = 0;
let currentPlayer = null;
let playerX = 'X';
let playerO = 'O';
let gameOver;
let playerXCounter = 0;


const checkWinner = function(){
  for (var i = 0; i < topRow.length; i++) {
    if (topRow[i].hasClass("playerX")) {
      console.log(playerXCounter++);
    } else if(topRow[i].hasClass("playerO")){
      console.log(playerXCounter--);
    }
  }//for
};//checkWinner


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

  if (turns >= 4) {
    checkWinner();
  }

  if (turns === 9) {
    console.log("Its a draw!");
  } else if (playerXCounter === 3) {
    console.log("Player X Wins");
    playerXCounter = 0;
  } else if (playerXCounter === -3) {
    console.log("Player O Wins");
    playerXCounter = 0;
  } else {
    playerXCounter = 0;
  }






/*

  if (turns >= 4) {
    for (var i = 0; i < topRow.length; i++) {
      if (!topRow[i].hasClass("playerX")) {
        gameOver = false;
      } else if (!middleRow[i].hasClass("playerX")) {

      }{

      }//else
    }//for

  }//if



*/


});

/*
  if (turns >= 4) {
    $('top-row').children('squares').each(function(){
      if ($(this).hasClass('playerX')) {
        playerXCounter++;
      }
    });
  }
*/

/*

$('.gameboard').find('.squares').hover(function(){
  $(this).text(currentPlayer).addClass('player');
}, function(){
  $(this).text("").removeClass('player');
});

*/
module.exports = true;
