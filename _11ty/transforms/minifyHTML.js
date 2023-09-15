const TerserHTML = require('html-minifier-terser');
const { IS_PRODUCTION } = require('../constants');

const HTML_MINIFIER_OPTIONS = {
  useShortDoctype: false,
  removeComments: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
};

module.exports = (content, outputPath) => {
  if (IS_PRODUCTION && outputPath && outputPath.endsWith('.html')) {
    return TerserHTML.minify(content, HTML_MINIFIER_OPTIONS);
  }
  return content;
};
