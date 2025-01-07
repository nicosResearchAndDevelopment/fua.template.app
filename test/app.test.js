const
  expect = require('expect'),
  { describe, test } = require('mocha'),
  app = require('../src/app.js');

describe('template.app', function () {

  test('develop', async function () {
    console.log(app);
  });

});
