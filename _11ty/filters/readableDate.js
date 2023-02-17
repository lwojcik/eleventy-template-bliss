const moduleName = require('../helpers/moduleName');
const formattedDate = require('../helpers/formattedDate');
const siteConfig = require('../../content/_data/siteConfig');

const DATE_FORMAT = siteConfig.dateFormats.readable;

const body = (date) => formattedDate(date, DATE_FORMAT);

module.exports = {
  name: moduleName(__filename),
  body,
};
