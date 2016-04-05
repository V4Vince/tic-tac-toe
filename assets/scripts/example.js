'use strict';
/*
let winCondition = [0, 1, 2], [3, 4, 5], [6, 7, 8],//rows
                   [0, 3, 6], [1, 4, 5], [2, 5, 8],//columns
                   [1, 5, 9], [3, 5, 7];//across
*/

let currentSquare;
let turns = 0;
let currentPlayer = null;
let playerX = 'X';
let playerO = 'O';

$('.gameboard').find('.squares').click(function(){
  currentSquare = $(this);

  if (currentSquare.hasClass("empty")) {
    if (turns % 2 === 0) {
      currentPlayer = playerX;
      currentSquare.removeClass("empty").text(currentPlayer).addClass("playerX");
      turns++;
    } else {
      currentPlayer = playerO;
      currentSquare.removeClass("empty").text(currentPlayer).addClass("playerO");
      turns++;
    }
  }
});



/*

$('.gameboard').find('.squares').hover(function(){
  $(this).text(currentPlayer).addClass('player');
}, function(){
  $(this).text("").removeClass('player');
});

*/
module.exports = true;
