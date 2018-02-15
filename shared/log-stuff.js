'use strict';
const movies = require('../data/movies.json');

module.exports = function logStuff(logger) {
    if (logger.fatal) {
        logger.fatal("I'm a fatal message");
    }
    logger.error("I'm an error message");
    logger.warn("I'm a warning message");
    logger.info("I'm an info message");
    logger.debug("I'm a debug message");
    logger.trace("I'm a trace message");

    movies.forEach(function(movie) {
        logger.debug(movie);
    });
};
