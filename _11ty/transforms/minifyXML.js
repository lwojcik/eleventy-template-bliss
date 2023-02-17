const moduleName = require('../helpers/moduleName');
const minifyXML = require('minify-xml').minify;
const { IS_PRODUCTION } = require('../constants');

const XML_MINIFIER_OPTIONS = {
  trimWhitespaceFromTexts: true,
  collapseWhitespaceInTexts: true,
};

const body = (content, outputPath) => {
  if (IS_PRODUCTION && outputPath && outputPath.endsWith('.xml')) {
    return minifyXML(content, XML_MINIFIER_OPTIONS);
  }
  return content;
};

module.exports = {
  name: moduleName(__filename),
  body,
};
