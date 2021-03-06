'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {

  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);
  });

  $('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
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

};

const patchGame = function(){
    authApi.save(authUi.success, authUi.failure);
};


module.exports = {
  addHandlers,
  patchGame,
};
