const moduleName = require('../helpers/moduleName');
const body = (array, limit) => array.slice(0, limit);

module.exports = {
  name: moduleName(__filename),
  body,
};
