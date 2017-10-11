'use strict';
const winston = require('winston');
const logStuff = require('../shared/log-stuff');
const levels = require('../shared/levels');

const logger = winston.createLogger({
    level: 'trace',
    levels: levels,
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [new winston.transports.File({ filename: 'logs/error.log', level: 'warn' })]
});

logStuff(logger);
