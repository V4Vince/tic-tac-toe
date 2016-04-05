'use strict';
/*
let winCondition = [0, 1, 2], [3, 4, 5], [6, 7, 8],//rows
                   [0, 3, 6], [1, 4, 5], [2, 5, 8],//columns
                   [1, 5, 9], [3, 5, 7];//across
*/

$( document ).ready(function() {
    console.log( 'ready!' );

    let gameboard = [0, 1, 2, 3, 4, 5, 6, 7 ,8];
    let currentPlayer = $('playerX');

    $('.gameboard').find('.squares').hover(function(){
      $(this).addClass('showSelection');
    }, function(){
      $(this).removeClass('showSelection');
  });

    $('.gameboard').find('.squares').click(function(){
    $(this).text('X').addClass('playerX');
  });


});




module.exports = true;
