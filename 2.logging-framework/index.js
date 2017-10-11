'use strict';
const winston = require('winston');
const levels = require('../shared/levels');
const colours = require('../shared/colours');
winston.addColors(colours);
const logStuff = require('../shared/log-stuff');

const logger = new winston.Logger({
    level: 'trace',
    levels: levels,
    transports: [
        new winston.transports.Console({
            colorize: true,
            timestamp: true,
            level: 'debug' //overriding default log level for this transport
        })
    ]
});

logStuff(logger);
