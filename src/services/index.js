'use strict';
const lesson = require('./lesson');
const student = require('./student');
const game = require('./game');
const message = require('./message');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(message);
  app.configure(game);
  app.configure(student);
  app.configure(lesson);
};
