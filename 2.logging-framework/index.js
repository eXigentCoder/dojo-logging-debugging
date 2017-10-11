'use strict';
const winston = require('winston');
const logStuff = require('../shared/log-stuff');
const levels = require('../shared/levels');
const colours = require('../shared/colours');

winston.addColors(colours);
const logger = winston.createLogger({
    level: 'trace',
    levels: levels,
    format: winston.format.combine(winston.format.colorize({ all: true }), winston.format.simple()),
    transports: [new winston.transports.Console()]
});

logStuff(logger);
