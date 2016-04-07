'use strict';

const app = require('../app-data.js');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
};

const createSuccess = () => {
  app.user = null;
  console.log(app);
};

const findSuccess = () => {
  app.user = null;
  console.log(app);
};

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
};
