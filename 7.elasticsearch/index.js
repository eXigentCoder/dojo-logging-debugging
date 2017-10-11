'use strict';
const winston = require('winston');
require('winston-elasticsearch');
const elasticsearch = require('elasticsearch');
const levels = require('../shared/levels');
const colours = require('../shared/colours');
winston.addColors(colours);
const logStuff = require('../shared/log-stuff');

const client = new elasticsearch.Client({
    host: '192.168.99.100:9200'
});

const logger = new winston.Logger({
    level: 'trace',
    levels: levels,
    transports: [
        new winston.transports.Elasticsearch({
            client,
            indexPrefix: 'awesome-app',
            mappingTemplate: require('./index-template-mapping.json'),
            ensureMappingTemplate: true,
            flushInterval: 300
        })
    ]
});

logStuff(logger);

setTimeout(function() {
    // eslint-disable-next-line
    process.exit(0);
}, 1000);
