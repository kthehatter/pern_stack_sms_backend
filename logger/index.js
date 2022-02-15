const wareedLogger = require('./logger');

let logger;
if (process.env.NODE_ENV !== 'production') {
    logger = wareedLogger();
  }
module.exports = logger;