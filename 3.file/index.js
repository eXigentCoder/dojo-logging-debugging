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
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'warn'
        })
    ]
});

logStuff(logger);
