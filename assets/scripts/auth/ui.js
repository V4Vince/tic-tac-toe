'use strict';

const app = require('../app-data');
const game = require('./game-data');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const changePasswordSuccess = () => {
  console.log("trying to change password");
  console.log("Change password successful!");
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
};

const createSuccess = (data) => {
  game.gameId = data.game.id;
  console.log(data);
};

const success = (data) => {
  console.log(data);
};

const grabSuccess = (data) => {
  $('.grab-game').text(data.games.length);
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  changePasswordSuccess,
  signInSuccess,
  signOutSuccess,
  createSuccess,
  game,
  grabSuccess,
  app,
};
