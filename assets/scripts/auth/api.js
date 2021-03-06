'use strict';


const app = require('../app-data');
const gameData = require('./game-data');

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
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
    .fail(failure);
};

const changePassword = (success, failure) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
    .fail(failure);
};

const create = (success, failure) => {
  console.log(app.data);
  $.ajax({
    method: 'POST',
    url: app.api + '/games/',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
    .fail(failure);
};

const save = (success, failure) => {
  console.log(gameData.gameIndex);
  $.ajax({
    method: 'PATCH',
    url: app.api + '/games/' + gameData.gameId,
    data: {
      "game": {
        "cell": {
          "index": gameData.gameIndex,
          "value": gameData.gameValue
        },
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  }).done(success)
    .fail(failure);
};

module.exports = {
  signUp,
  signIn,
  signOut,
  create,
  save,
  app,
};
