const moduleName = require('../helpers/moduleName');

const body = (str) => str.replace(/(["'])/g, '\\$1');

module.exports = {
  name: moduleName(__filename),
  body,
};
