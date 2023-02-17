const moduleName = require('../helpers/moduleName');
const body = (array, limit) => array.slice(-limit);

module.exports = {
  name: moduleName(__filename),
  body,
};
