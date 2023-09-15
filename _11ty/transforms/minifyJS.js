const { minify } = require('terser');
const { IS_PRODUCTION } = require('../constants');

const JS_MINIFIER_OPTIONS = {
  mangle: true,
};

module.exports = async (content, outputPath) => {
  if (IS_PRODUCTION && outputPath && outputPath.endsWith('.js')) {
    const minified = await minify(content, JS_MINIFIER_OPTIONS);
    return minified.code;
  } else {
    return content;
  }
};
