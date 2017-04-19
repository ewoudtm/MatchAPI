'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('lesson service', function() {
  it('registered the lessons service', () => {
    assert.ok(app.service('lessons'));
  });
});
