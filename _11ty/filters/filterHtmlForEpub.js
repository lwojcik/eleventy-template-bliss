const moduleName = require('../helpers/moduleName');

const UNESCAPED_QUOTES = /"/g;
const ESCAPED_QUOTES = '\\"';
const FILTERED_NEWLINE_CHARACTERS_REGEX = /(\r\n|\n|\r)/gm;

const body = (content) =>
  content
    .replace(UNESCAPED_QUOTES, ESCAPED_QUOTES)
    .replace(FILTERED_NEWLINE_CHARACTERS_REGEX, '');

module.exports = {
  name: moduleName(__filename),
  body,
};
