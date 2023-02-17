const moduleName = require('../helpers/moduleName');
const formattedDate = require('../helpers/formattedDate');
const siteConfig = require('../../content/_data/siteConfig');

const FULL_READABLE_DATE_FORMAT = siteConfig.dateFormats.fullReadable;

const body = (date) => formattedDate(date, FULL_READABLE_DATE_FORMAT);

module.exports = {
  name: moduleName(__filename),
  body,
};
