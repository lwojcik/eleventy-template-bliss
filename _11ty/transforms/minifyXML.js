const moduleName = require('../helpers/moduleName');
const minifyXML = import('minify-xml');
const { IS_PRODUCTION } = require('../constants');

const XML_MINIFIER_OPTIONS = {
  trimWhitespaceFromTexts: true,
  collapseWhitespaceInTexts: true,
};

const body = async (content, outputPath) => {
  if (IS_PRODUCTION && outputPath && outputPath.endsWith('.xml')) {
    const minify = await minifyXML.minify;
    return minify(content, XML_MINIFIER_OPTIONS);
  }
  return content;
};

module.exports = {
  name: moduleName(__filename),
  body,
};
