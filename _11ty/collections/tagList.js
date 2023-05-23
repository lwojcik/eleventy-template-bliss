const moduleName = require('../helpers/moduleName');
const { EXCLUDED_TAGS } = require('../constants');
const siteConfig = require('../../content/_data/siteConfig');

const { language, options } = siteConfig.localeSort;

module.exports = {
  name: moduleName(__filename),
  body: (collectionApi) => {
    const tagsSet = new Set();
    collectionApi.getAll().forEach((item) => {
      if (!item.data.tags) return;
      item.data.tags
        .filter((tag) => !EXCLUDED_TAGS.includes(tag))
        .forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort((a, b) =>
      a.localeCompare(b, language, options)
    );
  },
};
