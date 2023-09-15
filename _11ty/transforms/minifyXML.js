const minifyXML = import('minify-xml');
const { IS_PRODUCTION } = require('../constants');

const XML_MINIFIER_OPTIONS = {
  trimWhitespaceFromTexts: true,
  collapseWhitespaceInTexts: true,
};

module.exports = async (content, outputPath) => {
  if (IS_PRODUCTION && outputPath && outputPath.endsWith('.xml')) {
    const minifier = await minifyXML;
    const { minify } = minifier;
    return minify(content, XML_MINIFIER_OPTIONS);
  }
  return content;
};
