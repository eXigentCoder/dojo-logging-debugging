'use strict';
const winston = require('winston');
require('winston-mongodb');
const levels = require('../shared/levels');
const colours = require('../shared/colours');
winston.addColors(colours);
const logStuff = require('../shared/log-stuff');

const logger = new winston.Logger({
    level: 'trace',
    levels: levels,
    transports: [
        new winston.transports.MongoDB({
            db:
                'mongodb://192.168.99.100:27017/my-awesome-app?readPreference=primary',
            collection: 'my-awesome-logs',
            level: 'debug'
        })
    ]
});

logStuff(logger);

// setTimeout(function() {
//     // eslint-disable-next-line
//     process.exit(0);
// }, 1000);
