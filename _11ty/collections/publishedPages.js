const moduleName = require('../helpers/moduleName');
const { PAGE_COLLECTION_TAG_NAME } = require('../constants');

module.exports = {
  name: moduleName(__filename),
  body: (collectionApi) =>
    collectionApi
      .getFilteredByTag(PAGE_COLLECTION_TAG_NAME)
      .filter((item) => item.data.published),
};
