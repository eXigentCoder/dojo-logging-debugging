'use strict';
const movies = require('../data/movies.json');

module.exports = function logStuff(logger) {
    logger.fatal("I'm an fatal message");
    logger.error("I'm a error message");
    logger.warn("I'm an warning message");
    logger.info("I'm a info message");
    logger.debug("I'm a debug message");
    logger.trace("I'm a trace message");

    movies.forEach(function(movie) {
        logger.debug(movie);
    });
};
