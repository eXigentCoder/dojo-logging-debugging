'use strict';
const { createLogger, format, transports, addColors } = require('winston');
const { combine, timestamp, simple, colorize } = format;
const levels = require('../shared/levels');
const colours = require('../shared/colours');
addColors(colours);
const logStuff = require('../shared/log-stuff');

const logger = createLogger({
    level: 'trace',
    levels: levels,
    transports: [
        new transports.Console({
            format: combine(colorize({ all: true }), timestamp(), simple())
        })
    ]
});

logStuff(logger);
