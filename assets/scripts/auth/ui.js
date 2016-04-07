'use strict';

const app = require('../app-data');
const game = require('./game-data');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
};

const createSuccess = (data) => {
  game.gameId = data.game.id;
  console.log(data);
};
/*
const findSuccess = () => {
  app.user = null;
  console.log(app);
};
*/
const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  createSuccess,
  game,
};
