'use strict';
const winston = require('winston');
require('winston-mail').Mail;
const levels = require('../shared/levels');
const colours = require('../shared/colours');
winston.addColors(colours);
const logStuff = require('../shared/log-stuff');

const logger = new winston.Logger({
    level: 'trace',
    levels: levels,
    transports: [
        new winston.transports.Mail({
            to: 'potz666@gmail.com',
            from: 'exceptions@entelect.co.za',
            host: '192.168.99.100',
            port: '1025',
            level: 'error'
        })
    ]
});

logStuff(logger);
