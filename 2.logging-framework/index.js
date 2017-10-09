'use strict';
const winston = require('winston');
const levels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5
};
const logger = winston.createLogger({
    level: 'info', //can set a default level here
    levels: levels,
    format: winston.format.json(),
    transports: [new winston.transports.Console({ level: 'trace' })]
});

logger.fatal("I'm an fatal message");
logger.error("I'm a error message");
logger.warn("I'm an warning message");
logger.info("I'm a info message");
logger.debug("I'm a debug message");
logger.trace("I'm a trace message");
