const { DateTime } = require('luxon');
const moduleName = require('../helpers/moduleName');

const body = (date) => DateTime.fromJSDate(date, { zone: 'utc' }).toISO();

module.exports = {
  name: moduleName(__filename),
  body,
};
