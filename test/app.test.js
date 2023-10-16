const
    expect           = require('expect'),
    {describe, test} = require('mocha'),
    app              = require('../src/app.js');

describe('app.template', function () {

    test('develop', async function () {
        console.log(app);
    });

});
