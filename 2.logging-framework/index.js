'use strict';
const winston = require('winston');
const logStuff = require('../shared/log-stuff');
const levels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5
};
const colours = {
    fatal: 'magenta',
    error: 'red',
    warn: 'yellow',
    info: 'grey',
    debug: 'green',
    trace: 'cyan'
};
winston.addColors(colours);
const logger = winston.createLogger({
    level: 'trace',
    levels: levels,
    format: winston.format.combine(winston.format.colorize({ all: true }), winston.format.simple()),
    transports: [new winston.transports.Console()]
});

logStuff(logger);
