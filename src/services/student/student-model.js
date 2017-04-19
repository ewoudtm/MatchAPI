'use strict';

// student-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentId: [Schema.Types.ObjectId],
  active: {type: Boolean, 'default': true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const studentModel = mongoose.model('student', studentSchema);

module.exports = studentModel;
