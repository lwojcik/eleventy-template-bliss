const { parse } = require('node-html-parser');
const makeImgSrcsLocal = require('./makeImgSrcsLocal');
const removeVideosFromContent = require('./removeVideosFromContent');

const processImagesForOfflineFiles = (content, rootPath) => {
  const parsedContent = parse(content);
  const contentWithLocalizedImages = makeImgSrcsLocal(parsedContent, rootPath);
  const preprocessedContent = removeVideosFromContent(
    contentWithLocalizedImages
  );
  return preprocessedContent;
};

module.exports = processImagesForOfflineFiles;
