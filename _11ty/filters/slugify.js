// Using custom slug filter to ensure configurability
// and backwards compatibility with existing permalinks

const slugify = require('slugify');
const moduleName = require('../helpers/moduleName');
const { SLUGIFY_CONFIG } = require('../constants');

const body = (input) => slugify(input, SLUGIFY_CONFIG);

module.exports = {
  name: moduleName(__filename),
  body,
};
