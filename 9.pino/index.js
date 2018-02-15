'use strict';
const createPino = require('pino');
const logStuff = require('../shared/log-stuff');

let pino;
let options = {
    prettyPrint: true,
    level: 'trace'
};
if (process.env.noPretty) {
    options.prettyPrint = false;
}
pino = createPino(options);

logStuff(pino);
