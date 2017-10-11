'use strict';
const { createLogger, format, transports, addColors } = require('winston');
const { combine, timestamp, json, colorize, simple } = format;
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
        }),
        new transports.File({
            format: combine(timestamp(), json()),
            filename: 'logs/error.log',
            level: 'warn'
        })
    ]
});

logStuff(logger);
