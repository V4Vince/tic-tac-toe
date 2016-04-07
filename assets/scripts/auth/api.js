'use strict';
//test to see if the code works
const app = require('../app-data');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-up',
    data,
  }).done(success)
    .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    data,
  }).done(success)
    .fail(failure);
};

const signOut = (success, failure) => {
  //if(!app.user) <-- bad
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
    .fail(failure);
};

const create = (success, failure) => {
  console.log(app.user.token);
  $.ajax({
    method: 'POST',
    url: app.api + '/games',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  }).done(success)
    .fail(failure);
};

const findGame = (success, failure, data) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/games/' + app.user.id,
    data,
  }).done(success)
    .fail(failure);
};

/*

const updateGames = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/games/' + app.user.id,
    data:

  }).done(success)
    .fail(failure);
};

*/
module.exports = {
  signUp,
  signIn,
  signOut,
  create,
  findGame,
};
