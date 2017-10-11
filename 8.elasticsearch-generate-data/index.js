'use strict';
const readLine = require('linebyline');
const path = require('path');
const winston = require('winston');
require('winston-elasticsearch');
const elasticsearch = require('elasticsearch');
const levels = require('../shared/levels');
const Alpine = require('alpine');
const alpine = new Alpine(Alpine.LOGFORMATS.COMBINED);
const randomGeoHash = require('random-geohash');
const packageJson = require('../package.json');
const client = new elasticsearch.Client({
    host: process.env.DOCKER_MACHINE_IP + ':9200'
});
const moment = require('moment');

const logger = new winston.Logger({
    level: 'trace',
    levels: levels,
    transports: [
        new winston.transports.Elasticsearch({
            level: 'trace',
            client,
            indexPrefix: 'app-access-logs',
            mappingTemplate: require('./index-template-mapping.json'),
            ensureMappingTemplate: true,
            flushInterval: 300,
            transformer
        })
    ]
});
const totalNumberOfLines = 13509;
const lineReader = readLine(path.join(__dirname, './access_log'));
lineReader
    .on('line', function(line, lineCount) {
        const data = alpine.parseLine(line);
        delete data.originalLine;
        data.geohash = randomGeoHash();
        data.verb = data.request.split(' ')[0];
        data.path = data.request.split(' ')[1];
        data.time = moment(data.time, 'DD/MMM/YYYY:HH:mm:ss Z').toDate();
        logger.trace(data);
        if (lineCount === totalNumberOfLines) {
            setTimeout(function() {
                // eslint-disable-next-line
                process.exit(0);
            }, 5000);
        }
    })
    .on('error', function(err) {
        throw err;
    });

function transformer(logData) {
    const transformed = {};
    transformed['@timestamp'] = logData.meta.time;
    transformed['@version'] = packageJson.version;
    transformed.severity = logData.level;
    transformed.ipAddress = logData.meta.remoteHost;
    transformed.userAgent = logData.meta['RequestHeader User-agent'];
    transformed.location = logData.meta.geohash;
    transformed.verb = logData.meta.verb;
    transformed.path = logData.meta.path;
    transformed.size = logData.meta.sizeCLF;
    transformed.status = logData.meta.status;
    return transformed;
}
