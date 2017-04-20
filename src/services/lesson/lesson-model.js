'use strict';

// lesson-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  title: { type: String, required: true, 'default': 'Todays Lesson' },
  date: { type: Date },
  teams: { type: Array, 'default': [] },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const lessonModel = mongoose.model('lesson', lessonSchema);

module.exports = lessonModel;
