#!/usr/bin/env node

const
    path = require('path'),
    App  = require('@nrd/fua.agent.app'),
    app  = require('./app.js');

App.launch({
    space:  {
        context: {},
        store:   {
            module:  'filesystem',
            options: {
                defaultFile: 'file://data.ttl',
                loadFiles:   [
                    {
                        'dct:identifier': path.join(__dirname, '../data/load.json'),
                        'dct:format':     'application/fua.load+json'
                    },
                    require('@nrd/fua.resource.ontology.core')
                ]
            }
        }
    },
    domain: {
        uri: 'http://localhost/domain/'
    },
    helmut: true,
    amec:   {
        mechanisms: [
            {authType: 'BasicAuth', usernameAttr: 'dom:name', passwordAttr: 'dom:password'}
        ]
    },
    server: {
        port:    3000,
        app:     true,
        io:      true,
        session: true
    },
    app:    app
});
