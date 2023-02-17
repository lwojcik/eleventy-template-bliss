const moduleName = require('../helpers/moduleName');
const processImagesForOfflineFiles = require('../helpers/processImagesForOfflineFiles');
const { IS_PRODUCTION, PDF_CONTENT_PATH } = require('../constants');

const body = (content, outputPath) => {
  if (IS_PRODUCTION && outputPath && outputPath.endsWith(PDF_CONTENT_PATH)) {
    return processImagesForOfflineFiles(content);
  }
  return content;
};

module.exports = {
  name: moduleName(__filename),
  body,
};
