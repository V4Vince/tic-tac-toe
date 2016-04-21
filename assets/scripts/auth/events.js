'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app-data');
const authApi = require('./api');
const authUi = require('./ui');
// const require = require('./game-data')

const addHandlers = () => {

  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);

  });

  $('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
    app.currPass = data.credentials.password;
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });

  $('#sign-out').on('submit', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });

  $('#new-game').on('click', function (event) {
    event.preventDefault();
    authApi.create(authUi.createSuccess, authUi.failure);
  });

  $('#change-password').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.changePassword(authUi.changePasswordSuccess, authUi.failure, data);
  });

  $('#grab-game').on('submit', function (event){
    event.preventDefault();
    authApi.grabGame(authUi.grabSuccess, authUi.failure);
  });

};

const patchGame = function(){
    authApi.save(authUi.success, authUi.failure);
};


module.exports = {
  addHandlers,
  patchGame,
};
