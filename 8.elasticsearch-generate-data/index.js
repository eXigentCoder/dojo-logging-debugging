'use strict';
const readLine = require('linebyline');
const path = require('path');
const winston = require('winston');
require('winston-elasticsearch');
const elasticsearch = require('elasticsearch');
const levels = require('../shared/levels');
const Alpine = require('alpine');
const alpine = new Alpine(Alpine.LOGFORMATS.COMBINED);

const client = new elasticsearch.Client({
    host: '192.168.99.100:9200'
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

const lineReader = readLine(path.join(__dirname, './access_log'));
lineReader
    .on('line', function(line, lineCount, byteCount) {
        const data = alpine.parseLine(line);
        console.log(data, line);
    })
    .on('error', function(err) {
        throw err;
    });

//
// setTimeout(function() {
//     // eslint-disable-next-line
//     process.exit(0);
// }, 1000);
