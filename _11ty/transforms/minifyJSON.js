const jsonminify = require('jsonminify');
const { IS_PRODUCTION } = require('../constants');
const moduleName = require('../helpers/moduleName');

const body = (content, outputPath) => {
  if (IS_PRODUCTION && outputPath && outputPath.endsWith('.json')) {
    return jsonminify(content);
  }
  return content;
};

module.exports = {
  name: moduleName(__filename),
  body,
};
