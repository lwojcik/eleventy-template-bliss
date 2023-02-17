const moduleName = require('../helpers/moduleName');

const ASSUMED_WORDS_PER_MINUTE = 200;

const body = (wordCount) => Math.ceil(wordCount / ASSUMED_WORDS_PER_MINUTE);

module.exports = {
  name: moduleName(__filename),
  body,
};
