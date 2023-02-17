const moduleName = require('../helpers/moduleName');

module.exports = {
  name: moduleName(__filename),
  body: (collectionApi) =>
    collectionApi.getAll().filter((item) => item.data.published),
};
