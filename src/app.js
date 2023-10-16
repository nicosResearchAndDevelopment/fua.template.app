const
    tty       = require('@nrd/fua.core.tty'),
    Server    = require('@nrd/fua.agent.server'),
    {version} = require('../package.json');

module.exports = async function App() {

    Server.app.get('/about', function (request, response) {
        const about = {
            issuer:           `${request.protocol}://${request.host}/`,
            software_version: version
        };
        response.type('json').send(JSON.stringify(about));
    });

};
