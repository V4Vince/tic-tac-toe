'use strict';


$( document ).ready(function() {
    console.log( "ready!" );

    let gameboard = [0, 1, 2, 3, 4, 5, 6, 7 ,8];

    $('.gameboard').find('div').hover(function(){
      $(this).addClass("showSelection");
    }, function(){$(this).removeClass("showSelection");
    }
  );
});




module.exports = true;
