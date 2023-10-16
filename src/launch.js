const
    tty    = require('@nrd/fua.core.tty'),
    Server = require('@nrd/fua.agent.server'),
    App    = require('./app.js'),
    config = require('./config.json');

Server.initialize(config)
    .then(() => App(config))
    .then(async function launch() {
        await Server.start();
        tty.log('Server launched');
    })
    .catch(tty.error);
