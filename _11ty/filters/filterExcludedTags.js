const moduleName = require('../helpers/moduleName');
const { EXCLUDED_TAGS } = require('../constants');

const body = (tagArray) =>
  tagArray.filter((tag) => !EXCLUDED_TAGS.includes(tag));

module.exports = {
  name: moduleName(__filename),
  body,
};
