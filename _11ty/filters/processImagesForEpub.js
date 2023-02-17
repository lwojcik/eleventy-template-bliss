const moduleName = require('../helpers/moduleName');
const path = require('path');
const { BUILD_FOLDER } = require('../constants');
const processImagesForOfflineFiles = require('../helpers/processImagesForOfflineFiles');

const body = (content) =>
  processImagesForOfflineFiles(content, path.join(process.cwd(), BUILD_FOLDER));

module.exports = {
  name: moduleName(__filename),
  body,
};
