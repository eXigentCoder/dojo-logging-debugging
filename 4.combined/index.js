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
        new winston.transports.Console({
            colorize: true,
            timestamp: true
        }),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'warn'
        })
    ]
});

logStuff(logger);
