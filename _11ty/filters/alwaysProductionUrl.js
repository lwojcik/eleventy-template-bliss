const moduleName = require('../helpers/moduleName');
const siteConfig = require('../../content/_data/siteConfig');

const body = (path) => new URL(path, siteConfig.site.url);

module.exports = {
  name: moduleName(__filename),
  body,
};
