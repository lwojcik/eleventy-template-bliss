const socialImages = require('./events/socialImages');

const afterBuildEvents = [socialImages];

module.exports = {
  after: afterBuildEvents,
};
