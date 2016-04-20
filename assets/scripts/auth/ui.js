'use strict';

const app = require('../app-data');
const game = require('./game-data');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const changePasswordSuccess = (data) => {
  console.log("trying to change password");
  app.user = data.user;
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

const failure = (error) => {
  console.error(error);
};
// run grunt build
//

module.exports = {
  failure,
  success,
  changePasswordSuccess,
  signInSuccess,
  signOutSuccess,
  createSuccess,
  game,
  app,
};
