'use strict';
const winston = require('winston');
require('winston-elasticsearch');
const elasticsearch = require('elasticsearch');
const levels = require('../shared/levels');
const colours = require('../shared/colours');
winston.addColors(colours);
const logStuff = require('../shared/log-stuff');

const client = new elasticsearch.Client({
    host: process.env.DOCKER_MACHINE_IP + ':9200',
    httpAuth: process.env.ELASTIC_USERNAME + ':' + process.env.ELASTIC_PASSWORD
});

const logger = new winston.Logger({
    level: 'trace',
    levels: levels,
    transports: [
        new winston.transports.Elasticsearch({
            level: 'trace',
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
    console.log('Done');
    // eslint-disable-next-line
    process.exit(0);
}, 5000);
