'use strict';

// src/services/game/hooks/joinGame.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const errors = require('feathers-errors');
const matchStudents = require('../matchStudents');

module.exports = function(options) {
  return function(hook) {
    console.log('match Students')
    return hook.app.service('lessons').get(hook.id)
      .then((lesson) => {
        if (hook.data.matchStudents === undefined) {
          throw new errors.Forbidden('You must be the author to change a game like that.');
        }
        const students = hook.params.student.studentIds
        const matchedStudents = matchStudents(lesson, students)

        let data = {};
        data['$addToSet'] = { teams: matchedStudents };
        hook.data = data;

      })
  }
}
