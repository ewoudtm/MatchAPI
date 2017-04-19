'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const commonHooks = require('feathers-hooks-common');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [commonHooks.populate('students', {
    service: 'users',
    field: 'studentId'
    }),
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
