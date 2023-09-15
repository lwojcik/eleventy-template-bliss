const jsonminify = require('jsonminify');
const { IS_PRODUCTION } = require('../constants');

module.exports = (content, outputPath) => {
  if (IS_PRODUCTION && outputPath && outputPath.endsWith('.json')) {
    return jsonminify(content);
  }
  return content;
};
