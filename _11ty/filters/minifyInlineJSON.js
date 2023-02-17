const jsonminify = require('jsonminify');
const moduleName = require('../helpers/moduleName');
const { IS_PRODUCTION } = require('../constants');

const body = (content) => {
  if (!IS_PRODUCTION) {
    return content;
  }
  return jsonminify(content);
};

module.exports = {
  name: moduleName(__filename),
  body,
};
