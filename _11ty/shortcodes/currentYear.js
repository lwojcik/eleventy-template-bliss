const moduleName = require('../helpers/moduleName');
const { DateTime } = require('luxon');

const body = () => DateTime.local().toFormat('yyyy');

module.exports = {
  name: moduleName(__filename),
  body,
};
